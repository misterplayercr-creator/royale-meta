'use client'

import Link from 'next/link'
import { Swords, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111d33] border-t border-[#1a2d4a] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center">
                <Swords className="w-6 h-6 text-white" />
              </div>
              <span className="font-cinzel font-bold text-xl text-white">RoyaleMeta</span>
            </Link>
            <p className="text-[#94a3b8] text-sm max-w-md">
              La comunidad #1 de mazos de Clash Royale. Envía tus creaciones, vota, participa en torneos y gana premios reales financiados por anuncios.
            </p>
          </div>
          <div>
            <h4 className="font-cinzel font-semibold text-white mb-4">Plataforma</h4>
            <div className="space-y-2">
              <Link href="/mazos" className="block text-[#94a3b8] hover:text-[#FFD700] transition-colors">Mazos</Link>
              <Link href="/torneos" className="block text-[#94a3b8] hover:text-[#FFD700] transition-colors">Torneos</Link>
              <Link href="/ranking" className="block text-[#94a3b8] hover:text-[#FFD700] transition-colors">Ranking</Link>
              <Link href="/reglas" className="block text-[#94a3b8] hover:text-[#FFD700] transition-colors">Reglas</Link>
            </div>
          </div>
          <div>
            <h4 className="font-cinzel font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-2">
              <Link href="/terminos" className="block text-[#94a3b8] hover:text-[#FFD700] transition-colors">Términos</Link>
              <Link href="/privacidad" className="block text-[#94a3b8] hover:text-[#FFD700] transition-colors">Privacidad</Link>
              <Link href="/contacto" className="block text-[#94a3b8] hover:text-[#FFD700] transition-colors">Contacto</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#1a2d4a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-sm">© {new Date().getFullYear()} RoyaleMeta. No estamos afiliados a Supercell.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#94a3b8] hover:text-[#FFD700] transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-[#94a3b8] hover:text-[#FFD700] transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
