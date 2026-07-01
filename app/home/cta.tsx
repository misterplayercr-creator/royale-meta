'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#8B5CF6]">dominar</span> la arena?
          </h2>
          <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto">
            Únete a miles de jugadores que ya están compartiendo sus mazos, ganando torneos y consiguiendo premios reales.
          </p>
          <Link
            href="/registro"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#8B5CF6]/40 transition-all group"
          >
            Crear cuenta gratis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
