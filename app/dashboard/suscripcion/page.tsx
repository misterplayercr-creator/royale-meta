'use client'

import { Crown, Check } from 'lucide-react'
import { useDashboard } from '@/contexts/dashboard-context'

const plans = [
  {
    name: 'Gratis',
    price: '$0',
    features: ['Acceso a mazos', 'Votar mazos', 'Participar en torneos diarios'],
    current: true,
  },
  {
    name: 'Royale+ Mensual',
    price: '$4.99',
    features: ['Todo lo gratis', 'Torneos semanales', '50% bonus de puntos', 'Sin anuncios'],
    current: false,
  },
  {
    name: 'Royale+ Anual',
    price: '$49.99',
    features: ['Todo lo mensual', 'Torneos mensuales', 'Doble bonus puntos', 'Soporte prioritario'],
    current: false,
  },
]

export default function SuscripcionPage() {
  const { user } = useDashboard()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Royale+ Premium</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className={`p-6 rounded-2xl bg-[#1a2d4a] border ${plan.current && !user?.suscripcion ? 'border-[#FFD700]' : 'border-[#1a2d4a]'} relative`}>
            {user?.suscripcion && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#10B981] text-white text-xs font-semibold">
                Activo
              </div>
            )}
            <Crown className="w-10 h-10 text-[#FFD700] mx-auto mb-4" />
            <h3 className="font-cinzel font-bold text-xl text-white text-center mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold text-white text-center mb-4">{plan.price}<span className="text-sm text-[#94a3b8]">/mes</span></div>
            <ul className="space-y-2 mb-4">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-2 rounded-lg ${plan.current ? 'bg-[#10B981] text-white' : 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white'}`}>
              {plan.current ? 'Plan actual' : 'Suscribirse'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
