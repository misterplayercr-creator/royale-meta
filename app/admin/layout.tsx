'use client'

import AdminSidebar from '@/components/admin/admin-sidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
