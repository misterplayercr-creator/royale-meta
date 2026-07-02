'use client'

import Link from 'next/link'

export default function HistorialPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Historial de Puntos</h1>
      <div className="p-8 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
        <p className="text-[#94a3b8] mb-4">El historial está disponible en la sección de Premios</p>
        <Link href="/dashboard/premios" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-sm font-semibold">
          Ver historial de puntos
        </Link>
      </div>
    </div>
  )
}
