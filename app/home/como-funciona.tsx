'use client'

import { motion } from 'framer-motion'
import { Upload, Vote, Trophy } from 'lucide-react'
import Link from 'next/link'

export default function ComoFunciona() {
  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-white" />,
      title: 'Envía tu mazo',
      desc: 'Crea y comparte tus mejores combinaciones de cartas con la comunidad.',
      color: 'from-[#8B5CF6] to-[#3B82F6]',
    },
    {
      icon: <Vote className="w-12 h-12 text-white" />,
      title: 'Vota y gana puntos',
      desc: 'Evalúa los mazos de otros jugadores y acumula puntos por tu actividad.',
      color: 'from-[#3B82F6] to-[#10B981]',
    },
    {
      icon: <Trophy className="w-12 h-12 text-white" />,
      title: 'Gana premios',
      desc: 'Participa en torneos, escala el ranking y canjea tus puntos por premios reales.',
      color: 'from-[#10B981] to-[#FFD700]',
    },
  ]

  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4">Cómo funciona</h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            En solo 3 pasos puedes formar parte de la comunidad más competitiva de Clash Royale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] card-hover text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6`}>
                  {step.icon}
                </div>
                <div className="text-6xl font-cinzel font-bold text-[#1a2d4a] absolute top-4 right-4 -z-10">
                  {index + 1}
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#94a3b8]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
