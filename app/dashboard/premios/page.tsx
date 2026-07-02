'use client'

import { useState, useEffect } from 'react'
import { useDashboard } from '@/contexts/dashboard-context'
import { createBrowserClient } from '@supabase/ssr'
import { Gift } from 'lucide-react'

export default function PremiosPage() {
  const { user } = useDashboard()
  const [historial, setHistorial] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

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
      .limit(20)
      .then(({ data }) => {
        setHistorial(data || [])
        setLoading(false)
      })
  }, [supabase, user])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Mis Premios</h1>
      <div className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#8B5CF6] flex items-center justify-center">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="text-3xl font-bold text-white">{user?.puntos_total?.toLocaleString() || 0} pts</div>
            <div className="text-sm text-[#94a3b8]">Disponibles para canjear</div>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-semibold text-white">Historial de puntos</h2>
      {loading ? (
        <div className="text-[#94a3b8]">Cargando historial...</div>
      ) : historial.length === 0 ? (
        <div className="p-8 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] text-center">
          <p className="text-[#94a3b8]">Aún no has ganado puntos</p>
        </div>
      ) : (
        <div className="space-y-3">
          {historial.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-[#1a2d4a] border border-[#1a2d4a] flex items-center justify-between">
              <div>
                <div className="text-white text-sm">{item.descripcion || item.tipo}</div>
                <div className="text-xs text-[#94a3b8]">{new Date(item.fecha).toLocaleDateString()}</div>
              </div>
              <span className="text-[#10B981] font-semibold">{item.cantidad > 0 ? '+' : ''}{item.cantidad} pts</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
