'use client'

import { useEffect, useState } from 'react'
import DashboardSidebar from '@/components/dashboard/sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/auth/me')
      if (res.ok) {
        const data = await res.json()
        setUser(data)
      }
    }
    fetchUser()
  }, [])

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <div className="text-[#94a3b8]">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <DashboardSidebar />
      <div className="ml-64">
        <header className="h-16 bg-[#111d33]/80 backdrop-blur-md border-b border-[#1a2d4a] flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="font-cinzel text-xl font-bold text-white">Panel de Usuario</h1>
          <div className="flex items-center gap-4">
            <span className="text-[#FFD700] font-semibold">{user.puntos_total} pts</span>
          </div>
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  )
}
