'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Flame, Users, Gift } from 'lucide-react'

export default function TorneoDestacado() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#111d33] to-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4">Torneo del Día</h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#8B5CF6] text-sm font-semibold">
            <Flame className="w-4 h-4" />
            EL METAMORFO — Activo ahora
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1a2d4a] to-[#111d33] border-2 border-[#FFD700]/30 p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-cinzel text-2xl md:text-4xl font-bold text-white mb-4">
                  El Metamorfo
                </h3>
                <p className="text-[#94a3b8] mb-6 text-lg">
                  El torneo diario donde el mazo más votado del día se lleva 500 Gemas.
                  Inscríbete antes de las 7:45 PM y demuestra que tu deck es el mejor.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#8B5CF6]/20"><Calendar className="w-5 h-5 text-[#8B5CF6]" /></div>
                    <div>
                      <div className="text-white font-semibold">Todos los días</div>
                      <div className="text-sm text-[#94a3b8]">8:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#FFD700]/20"><Gift className="w-5 h-5 text-[#FFD700]" /></div>
                    <div>
                      <div className="text-white font-semibold">500 Gemas</div>
                      <div className="text-sm text-[#94a3b8]">1 ganador</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#3B82F6]/20"><Users className="w-5 h-5 text-[#3B82F6]" /></div>
                    <div>
                      <div className="text-white font-semibold">128</div>
                      <div className="text-sm text-[#94a3b8]">inscritos</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#10B981]/20"><Flame className="w-5 h-5 text-[#10B981]" /></div>
                    <div>
                      <div className="text-white font-semibold">50 pts</div>
                      <div className="text-sm text-[#94a3b8]">costo</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href="/torneos"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold hover:shadow-lg hover:shadow-[#FFD700]/40 transition-all"
                  >
                    Inscribirse Ahora
                  </Link>
                  <span className="text-[#94a3b8] text-sm">Hasta las 7:45 PM</span>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                  <div className="absolute inset-0 rounded-full border-4 border-[#FFD700]/20 animate-pulse" />
                  <div className="absolute inset-4 rounded-full border-4 border-[#8B5CF6]/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🏆</div>
                      <div className="font-cinzel text-xl font-bold text-[#FFD700]">GANA</div>
                      <div className="text-2xl font-bold text-white">500 Gemas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
