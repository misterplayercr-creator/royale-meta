'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from '@/components/admin/admin-sidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push('/login')
        return
      }

      const { data } = await supabase.from('usuarios').select('role').eq('id', session.user.id).single()
      
      if (data?.role !== 'admin') {
        router.push('/dashboard')
        return
      }

      setUser(data)
      setLoading(false)
    }
    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <div className="text-[#94a3b8]">Verificando permisos...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <AdminSidebar />
      <div className="ml-64">
        <header className="h-16 bg-[#111d33]/80 backdrop-blur-md border-b border-[#1a2d4a] flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="font-cinzel text-xl font-bold text-white">Panel de Administración</h1>
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  )
}
