'use client'

import { useState, useEffect } from 'react'
import { useDashboard } from '@/contexts/dashboard-context'
import { createBrowserClient } from '@supabase/ssr'

export default function TorneosPageDashboard() {
  const { user } = useDashboard()
  const [torneos, setTorneos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    supabase.from('torneos')
      .select('*')
      .eq('estado', 'abierto')
      .order('fecha_inicio', { ascending: true })
      .then(({ data }) => {
        setTorneos(data || [])
        setLoading(false)
      })
  }, [supabase])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Mis Torneos</h1>
      {loading ? (
        <div className="text-[#94a3b8]">Cargando torneos...</div>
      ) : torneos.length === 0 ? (
        <div className="p-8 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] text-center">
          <p className="text-[#94a3b8]">No hay torneos activos en este momento</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {torneos.map((torneo) => (
            <div key={torneo.id} className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h3 className="font-semibold text-white text-lg mb-2">{torneo.nombre}</h3>
              <p className="text-sm text-[#94a3b8] mb-3 capitalize">{torneo.tipo} • {torneo.premio_descripcion}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#FFD700] font-semibold">{torneo.costo_puntos} pts</span>
                <button className="px-4 py-1 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-sm">
                  Inscribirse
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
