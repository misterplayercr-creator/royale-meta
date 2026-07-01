'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export default function TopMazos() {
  const mazos = [
    { id: 1, titulo: 'Golem Beatdown v4.2', puntos: 1247, votos: 892, usuario: 'ProPlayer99', imagen: '/assets/cards/placeholder.jpg', rank: 1 },
    { id: 2, titulo: 'Hog Cycle Pro', puntos: 1102, votos: 845, usuario: 'CycleMaster', imagen: '/assets/cards/placeholder.jpg', rank: 2 },
    { id: 3, titulo: 'Log Bait Épico', puntos: 987, votos: 721, usuario: 'BaitKing', imagen: '/assets/cards/placeholder.jpg', rank: 3 },
    { id: 4, titulo: 'P.E.K.K.A Control', puntos: 876, votos: 654, usuario: 'DefenderX', imagen: '/assets/cards/placeholder.jpg', rank: 4 },
    { id: 5, titulo: 'Royal Giant Bridge', puntos: 765, votos: 589, usuario: 'SpamLord', imagen: '/assets/cards/placeholder.jpg', rank: 5 },
  ]

  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4">Top 5 de la Semana</h2>
            <p className="text-[#94a3b8] text-lg">Los mazos más votados por la comunidad</p>
          </div>
          <Link href="/ranking" className="hidden md:flex items-center gap-2 text-[#8B5CF6] hover:text-[#FFD700] transition-colors font-semibold">
            Ver ranking completo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {mazos.map((mazo, index) => (
            <motion.div
              key={mazo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] overflow-hidden card-hover h-full flex flex-col">
                <div className="relative h-40 bg-gradient-to-br from-[#8B5CF6]/20 to-[#3B82F6]/20 flex items-center justify-center">
                  <span className="text-4xl">🃏</span>
                  <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center font-cinzel font-bold text-sm ${mazo.rank === 1 ? 'bg-[#FFD700] text-black' : mazo.rank === 2 ? 'bg-[#C0C0C0] text-black' : mazo.rank === 3 ? 'bg-[#CD7F32] text-white' : 'bg-[#1a2d4a] text-white border border-[#1a2d4a]'}`}>
                    {mazo.rank}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-white mb-1 group-hover:text-[#FFD700] transition-colors line-clamp-1">{mazo.titulo}</h3>
                  <p className="text-sm text-[#94a3b8] mb-3">por @{mazo.usuario}</p>
                  <div className="mt-auto flex items-center justify-between text-sm">
                    <span className="text-[#FFD700] font-semibold">{mazo.puntos} pts</span>
                    <span className="text-[#94a3b8]">{mazo.votos} votos</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
