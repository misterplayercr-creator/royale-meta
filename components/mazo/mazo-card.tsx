'use client'

import { motion } from 'framer-motion'
import { Star, ThumbsUp, ThumbsDown, User } from 'lucide-react'
import Link from 'next/link'

export default function MazoCard({ id, titulo, descripcion, imagen, cartas, puntos, votos_positivos, votos_negativos, usuario }: any) {
  return (
    <Link href={`/mazos/${id}`}>
      <div className="rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] overflow-hidden card-hover h-full flex flex-col">
        <div className="relative h-48 bg-gradient-to-br from-[#8B5CF6]/20 to-[#3B82F6]/20 flex items-center justify-center">
          <span className="text-6xl">🃏</span>
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] text-sm font-semibold">
            {puntos} pts
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold text-white text-lg mb-1 line-clamp-1">{titulo}</h3>
          {descripcion && <p className="text-sm text-[#94a3b8] mb-3 line-clamp-2">{descripcion}</p>}
          <div className="flex items-center gap-2 mb-4">
            <User className="w-4 h-4 text-[#94a3b8]" />
            <span className="text-sm text-[#94a3b8]">{usuario?.username || 'Anónimo'}</span>
          </div>
          <div className="mt-auto flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-[#10B981]">
              <ThumbsUp className="w-4 h-4" />
              <span>{votos_positivos}</span>
            </div>
            <div className="flex items-center gap-1 text-[#EF4444]">
              <ThumbsDown className="w-4 h-4" />
              <span>{votos_negativos}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
