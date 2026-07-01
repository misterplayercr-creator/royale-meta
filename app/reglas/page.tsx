export default function ReglasPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-8">Reglas y Términos</h1>
        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-[#94a3b8]">
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">1. No estamos afiliados a Supercell</h2>
              <p>RoyaleMeta es una plataforma independiente de la comunidad, no afiliada ni respaldada por Supercell.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">2. Premios</h2>
              <p>Los premios son códigos de regalo oficiales. Los puntos no tienen valor monetario directo.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">3. Edad y Conducta</h2>
              <p>Edad mínima: 13 años. Prohibido el uso de bots, trampas o comportamiento abusivo.</p>
            </section>
            <section className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <h2 className="text-xl font-bold text-white mb-3">4. Datos y Privacidad</h2>
              <p>Datos protegidos por GDPR/LEY 29733. El usuario puede eliminar sus datos en cualquier momento.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
