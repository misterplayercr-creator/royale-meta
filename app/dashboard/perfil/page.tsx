'use client'

import { useDashboard } from '@/contexts/dashboard-context'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { createBrowserClient } from '@supabase/ssr'

export default function PerfilPage() {
  const { user } = useDashboard()
  const [loading, setLoading] = useState(false)
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Mi Perfil</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-xl font-semibold text-white">@{user?.username}</h2>
            <p className="text-[#94a3b8] text-sm mt-1">{user?.email}</p>
            <div className="mt-4 pt-4 border-t border-[#1a2d4a]">
              <div className="text-2xl font-bold text-[#FFD700]">{user?.puntos_total?.toLocaleString() || 0}</div>
              <div className="text-sm text-[#94a3b8]">Puntos totales</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
            <h3 className="font-semibold text-white mb-4">Información del Perfil</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#94a3b8] mb-1">Username</label>
                <input
                  type="text"
                  defaultValue={user?.username || ''}
                  className="w-full px-4 py-2 rounded-lg bg-[#0a1628] border border-[#1a2d4a] text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-[#94a3b8] mb-1">Email</label>
                <input
                  type="email"
                  defaultValue={user?.email || ''}
                  disabled
                  className="w-full px-4 py-2 rounded-lg bg-[#0a1628] border border-[#1a2d4a] text-[#94a3b8]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#94a3b8] mb-1">Racha actual</label>
                <div className="text-white font-semibold">{user?.racha_dias || 0} días</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
