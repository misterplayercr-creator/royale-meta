'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Trophy, Users, Swords } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#111d33] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[url('/assets/hero-pattern.png')] opacity-10" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2d4a] border border-[#8B5CF6]/30 text-sm text-[#94a3b8] mb-8">
            <Trophy className="w-4 h-4 text-[#FFD700]" />
            <span>Torneo Diario Activo — 500 Gemas en premios</span>
          </div>

          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            La comunidad <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#8B5CF6]">#1</span>
            <br />
            de mazos de Clash Royale
          </h1>

          <p className="text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto mb-10 leading-relaxed">
            Envía tus mejores creaciones, vota por las decks más ingeniosas, participa en torneos épicos
            y gana premios reales financiados por anuncios. ¡Conviértete en una leyenda!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/registro"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold text-lg hover:shadow-xl hover:shadow-[#8B5CF6]/40 transition-all flex items-center gap-2"
            >
              ¡Únete ahora!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/mazos"
              className="px-8 py-4 rounded-xl bg-[#1a2d4a] border border-[#1a2d4a] text-white font-semibold text-lg hover:border-[#8B5CF6] transition-all flex items-center gap-2"
            >
              <Swords className="w-5 h-5" />
              Ver mazos
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <StatCard icon={<Trophy className="w-8 h-8 text-[#FFD700]" />} value="1,247" label="Mazos enviados" />
          <StatCard icon={<Users className="w-8 h-8 text-[#8B5CF6]" />} value="3,892" label="Jugadores activos" />
          <StatCard icon={<Swords className="w-8 h-8 text-[#3B82F6]" />} value="12,456" label="Votos realizados" />
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="p-6 rounded-2xl bg-[#1a2d4a]/50 border border-[#1a2d4a] backdrop-blur-sm card-hover">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <div className="text-3xl font-bold text-white font-cinzel">{value}</div>
      <div className="text-sm text-[#94a3b8] mt-1">{label}</div>
    </div>
  )
}
