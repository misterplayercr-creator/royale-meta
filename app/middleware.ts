import { NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'

export async function middleware(request: Request) {
  const response = NextResponse.next()
  const supabase = await createServerSupabase()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const path = new URL(request.url).pathname

  // Rutas protegidas
  if (path.startsWith('/dashboard') || path.startsWith('/admin')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Rutas de admin
  if (path.startsWith('/admin')) {
    const { data: userData } = await supabase
      .from('usuarios')
      .select('role')
      .eq('id', session?.user.id)
      .single()

    if (userData?.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return response
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/api/:path*'],
}
