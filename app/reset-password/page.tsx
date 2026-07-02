'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      const data = await response.json()
      toast.error(data.error || 'Error al enviar email')
    } else {
      setSent(true)
      toast.success('Email de recuperación enviado')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1628] p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-cinzel text-3xl font-bold text-white mb-2">Recuperar Contraseña</h1>
          <p className="text-[#94a3b8]">Ingresa tu email para recuperar tu cuenta</p>
        </div>
        {sent ? (
          <div className="p-8 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] text-center">
            <p className="text-white mb-4">Revisa tu email y sigue las instrucciones</p>
            <Link href="/login" className="text-[#8B5CF6] hover:text-[#FFD700]">Volver al login</Link>
          </div>
        ) : (
          <form onSubmit={handleReset} className="p-8 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
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
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all disabled:opacity-50"
              >
                {loading ? 'Enviando...' : 'Enviar Email'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}