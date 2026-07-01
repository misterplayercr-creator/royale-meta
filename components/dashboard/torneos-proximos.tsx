'use client'

import { Crown, Flame } from 'lucide-react'
import Link from 'next/link'

const torneos = [
  { nombre: 'El Metamorfo', tipo: 'diario', costo: 50, premio: '500 Gemas', estado: 'abierto', hora: '20:00' },
  { nombre: 'Rey de la Semana', tipo: 'semanal', costo: 200, premio: '3x Emote Legendario', estado: 'abierto', hora: 'Domingo 18:00' },
]

export default function TorneosProximos() {
  return (
    <div className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
      <h3 className="font-cinzel text-lg font-bold text-white mb-4">Torneos Próximos</h3>
      <div className="space-y-4">
        {torneos.map((t, i) => (
          <div key={i} className="p-4 rounded-xl bg-[#0a1628] border border-[#1a2d4a]">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-white">{t.nombre}</h4>
              <span className="px-2 py-1 rounded-md bg-[#10B981]/20 text-[#10B981] text-xs font-medium">Abierto</span>
            </div>
            <p className="text-sm text-[#94a3b8] mb-3">{t.premio} • {t.hora}</p>
            <Link href={`/torneos/${i + 1}`} className="text-sm text-[#8B5CF6] hover:text-[#FFD700] transition-colors">
              Ver detalles →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
