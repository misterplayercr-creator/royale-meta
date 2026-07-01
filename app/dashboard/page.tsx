import DashboardStats from '@/components/dashboard/dashboard-stats'
import ActividadReciente from '@/components/dashboard/actividad-reciente'
import TorneosProximos from '@/components/dashboard/torneos-proximos'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Panel Principal</h1>
        <p className="text-[#94a3b8]">Resumen de tu actividad en RoyaleMeta</p>
      </div>
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ActividadReciente />
        <TorneosProximos />
      </div>
    </div>
  )
}
