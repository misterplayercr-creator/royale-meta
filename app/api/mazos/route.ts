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

  const mazoSchema = z.object({
    titulo: z.string().min(3).max(100),
    descripcion: z.string().max(500).optional(),
    cartas: z.array(z.string()).length(8),
    torre: z.string(),
  })

  try {
    const body = await request.json()
    const validated = mazoSchema.parse(body)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    }

    const { data, error } = await supabase.from('mazos').insert({
      usuario_id: user.id,
      titulo: validated.titulo,
      descripcion: validated.descripcion || '',
      cartas: validated.cartas,
      torre: validated.torre,
      imagen_url: '',
      puntos_votos: 0,
      votos_positivos: 0,
      votos_negativos: 0,
    }).select().single()

    if (error) throw error

    await supabase.from('historial_puntos').insert({
      usuario_id: user.id,
      cantidad: 15,
      tipo: 'envio_mazo',
      descripcion: `Envío de mazo: ${validated.titulo}`
    })

    const { data: usuario } = await supabase.from('usuarios').select('puntos_total').eq('id', user.id).single()
    await supabase.from('usuarios').update({
      puntos_total: (usuario?.puntos_total || 0) + 15,
      ultimo_envio: new Date().toISOString()
    }).eq('id', user.id)

    return NextResponse.json(data, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Datos inválidos', details: err.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Error al crear mazo' }, { status: 500 })
  }
}