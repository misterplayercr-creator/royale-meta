import LoginForm from '@/components/auth/login-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1628] p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-cinzel text-3xl font-bold text-white mb-2">Bienvenido de vuelta</h1>
          <p className="text-[#94a3b8]">Inicia sesión para continuar</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
