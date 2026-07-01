import { createServerSupabase } from '@/lib/supabase-server'

export default async function TorneosPage() {
  const supabase = await createServerSupabase()
  const { data: torneos } = await supabase
    .from('torneos')
    .select('*')
    .in('estado', ['abierto', 'cerrado'])
    .order('fecha_inicio', { ascending: true })

  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-8">Torneos</h1>
        <p className="text-[#94a3b8] mb-8">Se implementarán los componentes de torneos próximamente.</p>
      </div>
    </div>
  )
}
