import { cookies } from 'next/headers'
import { createServerSupabase as _createServerSupabase } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function createServerSupabase() {
  const cookieStore = cookies()
  return _createServerSupabase(cookieStore)
}

export async function getSession() {
  const supabase = await createServerSupabase()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session
}

export async function getCurrentUser() {
  const supabase = await createServerSupabase()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return null
  const { data } = await supabase.from('usuarios').select('*').eq('id', user.id).single()
  return data
}

export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) redirect('/login')
  return user
}

export async function requireAdmin() {
  const user = await requireAuth()
  if (user.role !== 'admin') redirect('/dashboard')
  return user
}