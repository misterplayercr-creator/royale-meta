import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | RoyaleMeta',
  description: 'Política de privacidad de RoyaleMeta',
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-8">Política de Privacidad</h1>
        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-[#94a3b8]">
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">1. Información que Recopilamos</h2>
              <p>Recopilamos información que nos proporcionas directamente (username, email) y datos de uso (mazos enviados, votos, participación en torneos).</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">2. Uso de la Información</h2>
              <p>Utilizamos tus datos para: (1) operar la plataforma, (2) mostrar rankings, (3) gestionar torneos, (4) enviar notificaciones importantes, (5) cumplir con obligaciones legales.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">3. Compartir Información</h2>
              <p>No vendemos ni alquilamos tu información personal. Solo compartimos datos públicos (username, puntos en rankings) según la configuración de privacidad.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">4. Seguridad</h2>
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos. La contraseña se almacena de forma encriptada mediante Supabase Auth.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">5. Tus Derechos</h2>
              <p>Tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos. Contacta soporte@royalemeta.com para ejercer estos derechos.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">6. Cookies</h2>
              <p>Utilizamos cookies esenciales para la autenticación y cookies de terceros para analítica y publicidad. Puedes gestionar las cookies desde tu navegador.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">7. Retención de Datos</h2>
              <p>Mantendremos tus datos mientras tu cuenta esté activa. Puedes solicitar eliminación en cualquier momento.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}