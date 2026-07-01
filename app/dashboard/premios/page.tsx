import DashboardLayout from '@/app/dashboard/layout'

export default function PremiosPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">Mis Premios</h1>
        <div className="p-8 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
          <p className="text-[#94a3b8]">Historial de premios en construcción...</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
