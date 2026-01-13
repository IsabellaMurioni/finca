import Hero from "@/components/home/hero"
import ProductsSection from "@/components/home/products-section"
import TraditionSection from "@/components/home/tradition-section"
import DifferentiatorsSection from "@/components/home/differentiators-section"
import CtaSection from "@/components/home/cta-section"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsSection />
      <TraditionSection />
      <DifferentiatorsSection />
      <CtaSection />
    </main>
  )
}
