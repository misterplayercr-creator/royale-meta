'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Trophy, Swords, User, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/mazos', label: 'Mazos' },
    { href: '/torneos', label: 'Torneos' },
    { href: '/ranking', label: 'Ranking' },
    { href: '/reglas', label: 'Reglas' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-[#8B5CF6]/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Swords className="w-6 h-6 text-white" />
            </div>
            <span className="font-cinzel font-bold text-xl text-white group-hover:text-[#FFD700] transition-colors">
              RoyaleMeta
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#FFD700] ${pathname === link.href ? 'text-[#FFD700]' : 'text-[#94a3b8]'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="px-4 py-2 text-sm font-medium text-[#94a3b8] hover:text-white transition-colors">
              Iniciar Sesión
            </Link>
            <Link href="/registro" className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-sm font-semibold text-white hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all">
              Registrarse
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111d33] border-t border-[#1a2d4a]"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="block py-2 text-[#94a3b8] hover:text-[#FFD700] transition-colors" onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#1a2d4a] space-y-3">
                <Link href="/login" className="block w-full text-center py-2 text-[#94a3b8] border border-[#1a2d4a] rounded-lg" onClick={() => setIsOpen(false)}>
                  Iniciar Sesión
                </Link>
                <Link href="/registro" className="block w-full text-center py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold" onClick={() => setIsOpen(false)}>
                  Registrarse
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
