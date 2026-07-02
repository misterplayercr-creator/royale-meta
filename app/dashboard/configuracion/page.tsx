'use client'

import { useDashboard } from '@/contexts/dashboard-context'
import { Bell, Shield, Globe, Moon } from 'lucide-react'

const settings = [
  { icon: <Bell className="w-5 h-5" />, label: 'Notificaciones', desc: 'Recibir alertas por email' },
  { icon: <Shield className="w-5 h-5" />, label: 'Privacidad', desc: 'Quién puede ver tu perfil' },
  { icon: <Globe className="w-5 h-5" />, label: 'Idioma', desc: 'Español' },
  { icon: <Moon className="w-5 h-5" />, label: 'Tema', desc: 'Oscuro (por defecto)' },
]

export default function ConfiguracionPage() {
  const { user } = useDashboard()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Configuración</h1>
      <div className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
        <h2 className="font-semibold text-white mb-4">Preferencias</h2>
        <div className="space-y-4">
          {settings.map((s) => (
            <div key={s.label} className="flex items-center justify-between p-4 rounded-lg bg-[#0a1628] border border-[#1a2d4a]">
              <div className="flex items-center gap-3">
                <div className="text-[#8B5CF6]">{s.icon}</div>
                <div>
                  <div className="text-white font-medium">{s.label}</div>
                  <div className="text-xs text-[#94a3b8]">{s.desc}</div>
                </div>
              </div>
              <button className="px-3 py-1 rounded-lg bg-[#1a2d4a] text-white text-sm">Cambiar</button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
        <h2 className="font-semibold text-white mb-4">Cuenta</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[#94a3b8]">Email verificado</span>
            <span className="text-[#10B981]">Sí</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#94a3b8]">Fecha registro</span>
            <span className="text-white">{user?.created_at ? new Date(user.created_at).toLocaleDateString() : '-'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
