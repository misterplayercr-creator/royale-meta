'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown, User } from 'lucide-react'
import Link from 'next/link'
import { createBrowserClient } from '@supabase/ssr'
import { toast } from 'react-hot-toast'

export default function MazoCard({ id, titulo, descripcion, imagen_url, cartas, puntos_votos, votos_positivos, votos_negativos, usuario, onVoto }: any) {
  const [loading, setLoading] = useState(false)
  const [votado, setVotado] = useState(false)
  const [votos, setVotos] = useState({ positivos: votos_positivos, negativos: votos_negativos })

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleVoto = async (tipo: 'positivo' | 'negativo') => {
    setLoading(true)
    try {
      const response = await fetch('/api/votos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mazo_id: id, tipo })
      })

      if (!response.ok) {
        throw new Error('Error al votar')
      }

      setVotos(prev => ({
        positivos: tipo === 'positivo' ? prev.positivos + 1 : prev.positivos,
        negativos: tipo === 'negativo' ? prev.negativos + 1 : prev.negativos
      }))
      setVotado(true)
      onVoto?.()
    } catch (error) {
      toast.error('Ya votaste o error en el voto')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] overflow-hidden card-hover h-full flex flex-col">
      <Link href={`/mazos/${id}`}>
        <div className="relative h-48 bg-gradient-to-br from-[#8B5CF6]/20 to-[#3B82F6]/20 flex items-center justify-center">
          <span className="text-6xl">🃏</span>
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] text-sm font-semibold">
            {puntos_votos} pts
          </div>
        </div>
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <Link href={`/mazos/${id}`}>
          <h3 className="font-semibold text-white text-lg mb-1 line-clamp-1 hover:text-[#8B5CF6]">{titulo}</h3>
        </Link>
        {descripcion && <p className="text-sm text-[#94a3b8] mb-3 line-clamp-2">{descripcion}</p>}
        <div className="flex items-center gap-2 mb-4">
          <User className="w-4 h-4 text-[#94a3b8]" />
          <span className="text-sm text-[#94a3b8]">{usuario?.username || 'Anónimo'}</span>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleVoto('positivo')}
              disabled={loading || votado}
              className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                votado 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'text-[#10B981] hover:bg-[#10B981]/10'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{votos.positivos}</span>
            </button>
            <button
              onClick={() => handleVoto('negativo')}
              disabled={loading || votado}
              className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                votado 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'text-[#EF4444] hover:bg-[#EF4444]/10'
              }`}
            >
              <ThumbsDown className="w-4 h-4" />
              <span>{votos.negativos}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
