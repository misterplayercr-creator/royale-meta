import { NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const supabase = await createServerSupabase()
  const { email } = await request.json()
  const { error } = await supabase.auth.resetPasswordForEmail(email)
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ success: true })
}
