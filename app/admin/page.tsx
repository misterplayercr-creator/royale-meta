import AdminLayout from '@/app/admin/layout'

export default function AdminPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">Dashboard Admin</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Usuarios" value="3,892" change="+12%" />
          <StatCard title="Mazos" value="1,247" change="+5%" />
          <StatCard title="Votos Hoy" value="842" change="+18%" />
          <StatCard title="Ingresos" value="$1,240" change="+8%" />
        </div>
      </div>
    </AdminLayout>
  )
}

function StatCard({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <div className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
      <div className="text-[#94a3b8] text-sm mb-2">{title}</div>
      <div className="text-3xl font-bold text-white font-cinzel">{value}</div>
      <div className="text-[#10B981] text-sm mt-1">{change}</div>
    </div>
  )
}
