"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { revealVariants, scrollFadeVariants } from "@/lib/animations"

export default function TraditionSection() {
  const ref = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={ref} className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={imageRef}
            variants={revealVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative h-[600px] rounded-lg overflow-hidden"
          >
            <motion.div style={{ y }} className="w-full h-full relative">
              <Image
                src="/finca2.png"
                alt="Tradición Familiar"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={scrollFadeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 md:h-[600px] md:flex md:flex-col md:justify-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl text-primary leading-tight"
            >
              El Arte de lo bueno
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              En Finca La Caramela, cada frasco cuenta una historia. La historia de una familia argentina que lleva
              generaciones perfeccionando el arte del dulce de leche artesanal.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Tras largos años de trabajo y dedicación, en 2016 nace Finca La Caramela S.R.L., reflejo de una visión amplia y una profunda conexión con ese producto original que nos inspira.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Gracias a la experiencia en la industria y a nuestra constante capacidad de adaptación, consolidamos una marca que hoy se distingue por la calidad, el sabor y la excelencia de cada uno de nuestros dulces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="mt-6 md:mt-0"
            >
              <Link href="/historia">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="text-lg px-8 py-6 bg-transparent border border-[#5b3a29] text-[#5b3a29] hover:bg-[#5b3a29] hover:text-white transition-colors duration-300">
                    Nuestra Historia
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
