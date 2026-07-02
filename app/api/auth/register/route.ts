import { NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const supabase = await createServerSupabase()
  const { email, password, username } = await request.json()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 400 })

  if (data.user) {
    await supabase.from('usuarios').insert({
      id: data.user.id,
      email: email,
      username: username,
      puntos_total: 0,
      puntos_disponibles: 0,
      racha_dias: 0,
      role: 'user',
    })
  }

  return NextResponse.json({ success: true, data })
}
