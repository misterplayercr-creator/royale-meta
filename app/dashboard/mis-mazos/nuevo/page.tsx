'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { createBrowserClient } from '@supabase/ssr'

const CARTAS = [
  // TANQUES (Win Conditions)
  'Golem de Hielo', 'Golem', 'Gigante', 'Gigante Real', 'Gigante Eléctrico', 'Caballero',
  'Valkiria', 'Mini P.E.K.K.A', 'P.E.K.K.A', 'Esqueleto Gigante',
  
  // ESBIRROS (Support)
  'Esbirros', 'Mega Esbirro', 'Murciélagos', 'Minero', 'Bebé Dragón',
  'Dragón Infernal', 'Dragón de Hielo', 'Esbirros de Hielo', 'Guerreros',
  
  // HECHIZOS (Spells)
  'Bola de Fuego', 'Veneno', 'Relámpago', 'Terremoto', 'Rayo',
  'Flechas', 'Globo de Hielo', 'Ciclón', 'Espíritu de Hielo',
  
  // TORRES (Buildings)
  'Cañón', 'Tesla', 'Infernal', 'Bombardero', 'Mortero',
  'X-Bow', 'Cañón de Hielo', 'Recolector',
  
  // MAGOS (Troop Spawners)
  'Mago', 'Bruja', 'Bruja Nocturna', 'Mago Eléctrico',
  'Mago de Hielo', 'Mago de Fuego',
  
  // OTROS (Variedad)
  'Montapuercos', 'Rama', 'Globo', 'Goliat', 'Bárbaros',
  'Esqueletos', 'Duendecillos', 'Príncipe', 'Princesa',
  'Príncipe Negro', 'Bandido', 'Cañón de Cañón', 'Mina',
  'Lanzarocas', 'Mascota', 'Curandera', 'Horda',
  'Bombilla', 'Catapulta', 'Tronco', 'Toro', 'Arquero',
  'Arquera', 'Gárrulo', 'Lanzafuegos', 'Constructor',
  'Gigante Noble', 'Bruxa', 'Espíritu', 'Nigromante',
  'Lanza Templo', 'Arquero de Hielo', 'Dragon', 'Murcielagos'
]

export default function NuevoMazoPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selectedCards, setSelectedCards] = useState<string[]>([])
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    torre: 'Princesa'
  })

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleCardToggle = (carta: string) => {
    setSelectedCards(prev => {
      if (prev.includes(carta)) {
        return prev.filter(c => c !== carta)
      }
      if (prev.length >= 8) {
        toast.error('Solo puedes seleccionar 8 cartas')
        return prev
      }
      return [...prev, carta]
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedCards.length !== 8) {
      toast.error('Debes seleccionar exactamente 8 cartas')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/mazos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          cartas: selectedCards
        })
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.error || 'Error al enviar mazo')
        return
      }

      toast.success('¡Mazo enviado! Ganaste 15 puntos')
      router.push('/dashboard/mis-mazos')
    } catch (error) {
      toast.error('Error al enviar mazo')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Enviar Nuevo Mazo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-[#94a3b8] mb-1">Título</label>
          <input
            type="text"
            value={formData.titulo}
            onChange={e => setFormData({ ...formData, titulo: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-lg bg-[#0a1628] border border-[#1a2d4a] text-white"
            placeholder="Nombre del mazo"
          />
        </div>
        <div>
          <label className="block text-sm text-[#94a3b8] mb-1">Descripción</label>
          <textarea
            value={formData.descripcion}
            onChange={e => setFormData({ ...formData, descripcion: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-[#0a1628] border border-[#1a2d4a] text-white"
            placeholder="Estrategia, sinergias, etc..."
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm text-[#94a3b8] mb-1">Torre</label>
          <select
            value={formData.torre}
            onChange={e => setFormData({ ...formData, torre: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-[#0a1628] border border-[#1a2d4a] text-white"
          >
            <option value="Princesa">Princesa</option>
            <option value="Rey">Rey</option>
            <option value="Duque">Duque</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#94a3b8] mb-2">
            Cartas Seleccionadas ({selectedCards.length}/8)
          </label>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 max-h-64 overflow-y-auto p-2 bg-[#0a1628] rounded-lg">
            {CARTAS.map((carta) => (
              <button
                key={carta}
                type="button"
                onClick={() => handleCardToggle(carta)}
                className={`p-2 rounded-lg text-xs transition-colors ${
                  selectedCards.includes(carta)
                    ? 'bg-[#87CEEB] text-[#0a1a2f]'
                    : 'bg-[#1a2d4a] text-[#94a3b8] hover:bg-[#2a3d5a]'
                }`}
              >
                {carta}
              </button>
            ))}
          </div>
          {selectedCards.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {selectedCards.map(c => (
                <span key={c} className="px-2 py-1 rounded bg-[#87CEEB]/20 text-xs text-[#87CEEB]">
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={loading || selectedCards.length !== 8}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-[#87CEEB] to-[#3B82F6] text-[#0a1a2f] font-semibold disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar Mazo (+15 pts)'}
        </button>
      </form>
    </div>
  )
}