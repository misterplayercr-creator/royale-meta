'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Flame, Filter, ArrowUpDown } from 'lucide-react'
import MazoCard from '@/components/mazo/mazo-card'

type SortOption = 'recientes' | 'populares' | 'mejorados'

export default function MazosClient({ initialMazos }: { initialMazos: any[] }) {
  const [mazos] = useState(initialMazos)
  const [sort, setSort] = useState<SortOption>('recientes')
  const [filter, setFilter] = useState('')

  const filtered = mazos
    .filter(m => m.titulo.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'populares') return b.votos_positivos - a.votos_positivos
      if (sort === 'mejorados') return b.puntos_votos - a.puntos_votos
      return new Date(b.fecha_envio).getTime() - new Date(a.fecha_envio).getTime()
    })

  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white">Mazos de la Comunidad</h1>
            <p className="text-[#94a3b8] mt-2">Descubre las mejores combinaciones enviadas por jugadores</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Buscar mazos..."
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-lg bg-[#1a2d4a] border border-[#1a2d4a] text-white text-sm focus:border-[#8B5CF6] focus:outline-none"
              />
            </div>
            <select
              value={sort}
              onChange={e => setSort(e.target.value as SortOption)}
              className="px-4 py-2 rounded-lg bg-[#1a2d4a] border border-[#1a2d4a] text-white text-sm focus:border-[#8B5CF6] focus:outline-none"
            >
              <option value="recientes">Más recientes</option>
              <option value="populares">Más votados</option>
              <option value="mejorados">Mejor puntuados</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Flame className="w-16 h-16 text-[#94a3b8]/30 mx-auto mb-4" />
            <p className="text-[#94a3b8] text-lg">No se encontraron mazos</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((mazo, index) => (
              <motion.div
                key={mazo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <MazoCard {...mazo} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
