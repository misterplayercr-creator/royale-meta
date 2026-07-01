'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Swords, Trophy, Gift, Users, Settings, Crown, LogOut } from 'lucide-react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const menuItems = [
  { href: '/dashboard', label: 'Panel', icon: LayoutDashboard },
  { href: '/dashboard/perfil', label: 'Perfil', icon: Users },
  { href: '/dashboard/mis-mazos', label: 'Mis Mazos', icon: Swords },
  { href: '/dashboard/torneos', label: 'Torneos', icon: Trophy },
  { href: '/dashboard/premios', label: 'Premios', icon: Gift },
  { href: '/dashboard/suscripcion', label: 'Royale+', icon: Crown },
  { href: '/dashboard/configuracion', label: 'Configuración', icon: Settings },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    await supabase.auth.signOut()
    toast.success('Sesión cerrada')
    router.push('/')
  }

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#111d33] border-r border-[#1a2d4a] flex flex-col">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center">
            <Swords className="w-5 h-5 text-white" />
          </div>
          <span className="font-cinzel font-bold text-lg text-white">RoyaleMeta</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map(item => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[#8B5CF6]/20 text-[#8B5CF6]' : 'text-[#94a3b8] hover:bg-[#1a2d4a] hover:text-white'}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-[#1a2d4a]">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#94a3b8] hover:bg-[#EF4444]/10 hover:text-[#EF4444] transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Cerrar sesión</span>
        </button>
      </div>
    </aside>
  )
}
