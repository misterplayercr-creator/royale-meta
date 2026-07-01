'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const testimonios = [
  {
    usuario: 'ProPlayer99',
    rango: 'Leyenda',
    texto: 'Gané mi primer torneo diario y en 48 horas tenía mis 500 gemas. RoyaleMeta es la plataforma más confiable.',
    puntos: 5420,
  },
  {
    usuario: 'CycleMaster',
    rango: 'Maestro',
    texto: 'El sistema de puntos es adictivo pero justo. Cada voto cuenta y los torneos semanales son bestiales.',
    puntos: 3100,
  },
  {
    usuario: 'BaitKing',
    rango: 'Experto',
    texto: 'Subo mis mazos cada mañana, gano puntos votando y ya canjeé dos emotes legendarios.',
    puntos: 1850,
  },
]

export default function Testimonios() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a1628] to-[#111d33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4">Lo que dice la comunidad</h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Miles de jugadores ya confían en RoyaleMeta para mostrar sus mazos y competir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center text-white font-bold text-lg">
                  {testimonio.usuario.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">@{testimonio.usuario}</div>
                  <div className="text-sm text-[#FFD700]">{testimonio.rango} • {testimonio.puntos.toLocaleString()} pts</div>
                </div>
              </div>
              <p className="text-[#94a3b8] italic">"{testimonio.texto}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
