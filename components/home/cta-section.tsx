"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { scrollFadeVariants } from "@/lib/animations"

export default function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-secondary/30">
      <motion.div
        variants={scrollFadeVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto px-4 text-center space-y-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-4xl md:text-6xl text-primary leading-tight"
        >
          ¿Listo para Probar la Diferencia?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          Descubrí el sabor auténtico del dulce de leche artesanal argentino. Estamos para responder tus consultas y
          asesorarte.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contacto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="text-lg px-8 py-6 group bg-[#5b3a29] text-white border border-transparent hover:bg-transparent hover:border-[#5b3a29] hover:text-[#5b3a29] transition-colors duration-300">
                Contactanos
                <ArrowRight className="ml-2 w-5 h-5 text-white group-hover:text-[#5b3a29] group-hover:translate-x-1 transition-all duration-300" />
              </Button>
            </motion.div>
          </Link>
          <Link href="/productos">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="text-lg px-8 py-6 group bg-transparent border border-[#5b3a29] text-[#5b3a29] hover:bg-[#5b3a29] hover:text-white transition-colors duration-300">
                Ver Productos
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
