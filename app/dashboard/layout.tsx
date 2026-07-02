'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import DashboardSidebar from '@/components/dashboard/sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const initAuth = async () => {
      try {
        const supabase = createClient()
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
          router.push('/login')
          return
        }

        const { data } = await supabase.from('usuarios').select('*').eq('id', session.user.id).single()
        setUser(data)
      } catch (error) {
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }
    initAuth()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <div className="text-[#94a3b8]">Cargando...</div>
      </div>
    )
  }

  if (!user) {
    return null
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
