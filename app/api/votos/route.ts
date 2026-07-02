import { z } from 'zod'
import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function POST(request: Request) {
  const cookieStore = await (await import('next/headers')).cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: Record<string, unknown>) {
          cookieStore.set(name, value, options as any)
        },
        remove(name: string, options: Record<string, unknown>) {
          cookieStore.set(name, '', { ...options, maxAge: 0 })
        },
      },
    }
  )

  const votoSchema = z.object({
    mazo_id: z.string().uuid(),
    tipo: z.enum(['positivo', 'negativo'])
  })

  try {
    const body = await request.json()
    const validated = votoSchema.parse(body)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    }

    const { data: votoExistente } = await supabase.from('votos')
      .select('id').eq('usuario_id', user.id).eq('mazo_id', validated.mazo_id).single()

    if (votoExistente) {
      return NextResponse.json({ error: 'Ya votaste este mazo' }, { status: 400 })
    }

    const { data, error } = await supabase.from('votos').insert({
      usuario_id: user.id,
      mazo_id: validated.mazo_id,
      tipo: validated.tipo
    }).select().single()

    if (error) throw error

    const incremento = validated.tipo === 'positivo' ? 1 : 0.5
    const { data: mazo } = await supabase.from('mazos')
      .select('votos_positivos, votos_negativos').eq('id', validated.mazo_id).single()

    await supabase.from('mazos').update({
      votos_positivos: validated.tipo === 'positivo' ? (mazo?.votos_positivos || 0) + 1 : mazo?.votos_positivos,
      votos_negativos: validated.tipo === 'negativo' ? (mazo?.votos_negativos || 0) + 1 : mazo?.votos_negativos,
      puntos_votos: (mazo?.votos_positivos || 0) * 1 - (mazo?.votos_negativos || 0) * 0.5 + (validated.tipo === 'positivo' ? 1 : 0.5)
    }).eq('id', validated.mazo_id)

    await supabase.from('historial_puntos').insert({
      usuario_id: user.id,
      cantidad: 2,
      tipo: 'voto',
      descripcion: `Voto ${validated.tipo} en mazo`
    })

    const { data: usuario } = await supabase.from('usuarios')
      .select('puntos_total').eq('id', user.id).single()

    await supabase.from('usuarios').update({
      puntos_total: (usuario?.puntos_total || 0) + 2,
      ultimo_voto: new Date().toISOString()
    }).eq('id', user.id)

    return NextResponse.json(data, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Error al votar' }, { status: 500 })
  }
}