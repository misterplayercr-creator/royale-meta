import { createServerSupabase } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import MazosClient from './mazos-client'

export default async function MazosPage() {
  const supabase = await createServerSupabase()
  const { data: mazos } = await supabase
    .from('mazos')
    .select('*, usuario:usuarios(username, avatar_url)')
    .eq('activo', true)
    .order('fecha_envio', { ascending: false })
    .limit(20)

  return <MazosClient initialMazos={mazos || []} />
}
