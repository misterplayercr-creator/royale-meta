import RegisterForm from '@/components/auth/register-form'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1628] p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-cinzel text-3xl font-bold text-white mb-2">Crea tu cuenta</h1>
          <p className="text-[#94a3b8]">Únete a la comunidad y comienza a ganar</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}
