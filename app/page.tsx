import Hero from './home/hero'
import ComoFunciona from './home/como-funciona'
import TorneoDestacado from './home/torneo-destacado'
import TopMazos from './home/top-mazos'
import Testimonios from './home/testimonios'
import CTASection from './home/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <ComoFunciona />
      <TorneoDestacado />
      <TopMazos />
      <Testimonios />
      <CTASection />
    </>
  )
}
