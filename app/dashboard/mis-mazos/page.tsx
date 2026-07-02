'use client'

import { useState, useEffect } from 'react'
import { useDashboard } from '@/contexts/dashboard-context'
import { createBrowserClient } from '@supabase/ssr'
import MazoCard from '@/components/mazo/mazo-card'

export default function MisMazosPage() {
  const { user } = useDashboard()
  const [mazos, setMazos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    if (!user) return

    supabase.from('mazos')
      .select('*, usuario:usuarios(username)')
      .eq('usuario_id', user.id)
      .order('fecha_envio', { ascending: false })
      .then(({ data }) => {
        setMazos(data || [])
        setLoading(false)
      })
  }, [supabase, user])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Mis Mazos</h1>
      {loading ? (
        <div className="text-[#94a3b8]">Cargando mazos...</div>
      ) : mazos.length === 0 ? (
        <div className="p-8 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] text-center">
          <p className="text-[#94a3b8] mb-4">No has enviado ningún mazo aún</p>
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold">
            Enviar mi primer mazo
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mazos.map((mazo) => (
            <MazoCard key={mazo.id} {...mazo} />
          ))}
        </div>
      )}
    </div>
  )
}
