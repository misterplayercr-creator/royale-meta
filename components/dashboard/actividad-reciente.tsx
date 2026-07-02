'use client'

import { useState, useEffect } from 'react'
import { useDashboard } from '@/contexts/dashboard-context'
import { createBrowserClient } from '@supabase/ssr'

export default function ActividadReciente() {
  const { user } = useDashboard()
  const [actividades, setActividades] = useState<any[]>([])

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    if (!user) return

    supabase.from('historial_puntos')
      .select('*')
      .eq('usuario_id', user.id)
      .order('fecha', { ascending: false })
      .limit(10)
      .then(({ data }) => setActividades(data || []))
  }, [supabase, user])

  const formatearFecha = (fecha: string) => {
    const d = new Date(fecha)
    const ahora = new Date()
    const diff = ahora.getTime() - d.getTime()
    
    if (diff < 3600000) return 'Hace unos minutos'
    if (diff < 86400000) return `Hoy, ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    return 'Ayer'
  }

  return (
    <div className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
      <h3 className="font-cinzel text-lg font-bold text-white mb-4">Actividad Reciente</h3>
      {actividades.length === 0 ? (
        <p className="text-[#94a3b8] text-sm">Aún no hay actividad</p>
      ) : (
        <div className="space-y-4">
          {actividades.map((act, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <div className="text-white text-sm">{act.descripcion || act.tipo}</div>
                <div className="text-xs text-[#94a3b8]">{formatearFecha(act.fecha)}</div>
              </div>
              <span className={`font-semibold text-sm ${act.cantidad >= 0 ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                {act.cantidad >= 0 ? '+' : ''}{act.cantidad} pts
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
