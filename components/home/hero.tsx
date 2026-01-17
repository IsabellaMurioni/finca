"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { heroVariants, heroChildVariants, easings } from "@/lib/easings"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div className="absolute inset-0 group" style={{ y }}>
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 2, ease: easings.slowOut }}
          className="relative w-full h-full"
          style={{ scale }}
        >
          <Image
            src="/finca.png"
            alt="Dulce de Leche Artesanal"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easings.elegant }}
          className="absolute inset-4 md:inset-8 border-4 border-white/60 rounded-[20px] pointer-events-none"
        />
      </motion.div>

      {/* Content with staggered animations */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.h1
          variants={heroChildVariants}
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-white text-balance"
        >
          Bienvenidos a Finca La Caramela
        </motion.h1>
        <motion.p
          variants={heroChildVariants}
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Tradición familiar argentina en cada cucharada.
        </motion.p>
        <motion.div variants={heroChildVariants}>
          <Link href="/productos">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Button size="lg" className="text-lg px-8 py-6 group bg-white text-[#5b3a29] border border-transparent hover:bg-transparent hover:border-white hover:text-white transition-colors duration-300">
                Conocé Nuestros Productos
                <ArrowRight className="ml-2 w-5 h-5 text-[#5b3a29] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
