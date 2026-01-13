"use client"

import ImageCarousel from "@/components/ui/image-carousel"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { scrollFadeVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

const featuredProducts = [
  {
    id: 1,
    name: "Línea Clásico",
    description:
      "Nuestro sabor tradicional en elegante pote de vidrio. Cremoso y equilibrado, ideal para disfrutar solo o en postres, resaltando la calidad artesanal y el carácter auténtico.",
    images: ["/clasico2.png", "clasico.png"],
    weight: "450g",
  },
  {
    id: 2,
    name: "Línea Anamá Clásico",
    description:
      "Variedad clásica premium, con ingredientes seleccionados, elaboradas para lograr una textura suave y un sabor auténtico.",
    images: ["/anama2.png", "/anama3.png"],
    weight: "400g/10kg/25kg",
  },
  {
    id: 3,
    name: "Línea familiar",
    description:
      "Presentaciones pensadas para el consumo diario en casa, con el sabor tradicional de siempre y la cremosidad justa.",
    images: ["/familiar4.png", "/familiar6.png"],
    weight: "200g/400g/500g/1kg/10kg",
  }
]

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={scrollFadeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">Nuestros Productos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada variedad elaborada artesanalmente con dedicación y los mejores ingredientes naturales
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group bg-secondary/30 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-80 overflow-hidden">
                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} className="w-full h-full">
                  <ImageCarousel images={product.images} alt={product.name} />
                </motion.div>
              </div>
              <div className="p-8 text-center">
                <h3 className="font-serif text-3xl text-primary mb-3">{product.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Link href="/productos">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="text-lg px-8 py-6 group bg-transparent border border-[#5b3a29] text-[#5b3a29] hover:bg-[#5b3a29] hover:text-white transition-colors duration-300">
                Ver Todos los Productos
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
