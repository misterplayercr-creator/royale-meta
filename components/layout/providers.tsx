'use client'

import { createBrowserClient } from '@supabase/ssr'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Session = any

interface SupabaseContextValue {
  supabase: ReturnType<typeof createBrowserClient>
  session: Session | null
}

const SupabaseContext = createContext<SupabaseContextValue | undefined>(undefined)

export function SupabaseProvider({ children, initialSession }: { children: ReactNode; initialSession?: Session }) {
  const [supabase] = useState(() =>
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  )
  const [session, setSession] = useState<Session | null>(initialSession || null)

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  return (
    <SupabaseContext.Provider value={{ supabase, session }}>
      {children}
    </SupabaseContext.Provider>
  )
}

export function useSupabase() {
  const context = useContext(SupabaseContext)
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context
}

export default function Providers({ children, initialSession }: { children: ReactNode; initialSession?: Session }) {
  return (
    <SupabaseProvider initialSession={initialSession}>
      {children}
    </SupabaseProvider>
  )
}
