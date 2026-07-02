import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | RoyaleMeta',
  description: 'Términos y condiciones de uso de RoyaleMeta',
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-8">Términos y Condiciones</h1>
        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-[#94a3b8]">
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">1. Aceptación de los Términos</h2>
              <p>Al utilizar RoyaleMeta, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo, no utilices la plataforma.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">2. Uso de la Plataforma</h2>
              <p>RoyaleMeta es una plataforma independiente de la comunidad de Clash Royale, no afiliada ni respaldada por Supercell. Los contenidos compartidos son responsabilidad de sus autores.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">3. Conducta del Usuario</h2>
              <p>Está prohibido el uso de bots, trampas, contenido ofensivo o cualquier comportamiento que perjudique la experiencia de otros usuarios. El incumplimiento resultará en suspensión o eliminación de la cuenta.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">4. Premios y Puntos</h2>
              <p>Los puntos tienen valor solo dentro de la plataforma. Los premios son códigos de regalo oficiales de Supercell. RoyaleMeta no garantiza la disponibilidad de premios.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">5. Datos Personales</h2>
              <p>Los datos se recopilan conforme al RGPD/LEY 29733. Puedes solicitar eliminación de tus datos en cualquier momento contactando soporte@royalemeta.com.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">6. Modificaciones</h2>
              <p>RoyaleMeta se reserva el derecho de modificar estos términos. Los cambios serán notificados vía email o en la plataforma.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}