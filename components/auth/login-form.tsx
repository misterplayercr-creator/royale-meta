'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

export default function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      toast.error(error.message)
    } else {
      toast.success('Sesión iniciada correctamente')
      router.push('/dashboard')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleLogin} className="p-8 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#94a3b8] mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#0a1628] border border-[#1a2d4a] text-white placeholder-[#94a3b8]/50 focus:border-[#8B5CF6] focus:outline-none transition-colors"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#94a3b8] mb-2">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#0a1628] border border-[#1a2d4a] text-white placeholder-[#94a3b8]/50 focus:border-[#8B5CF6] focus:outline-none transition-colors"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all disabled:opacity-50"
        >
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </div>
      <div className="mt-6 text-center">
        <Link href="/reset-password" className="text-sm text-[#8B5CF6] hover:text-[#FFD700] transition-colors">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <div className="mt-4 text-center text-sm text-[#94a3b8]">
        ¿No tienes cuenta? <Link href="/registro" className="text-[#8B5CF6] hover:text-[#FFD700] font-semibold">Regístrate</Link>
      </div>
    </form>
  )
}
