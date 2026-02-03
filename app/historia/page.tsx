"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { revealVariants, scrollFadeVariants } from "@/lib/easings"

export default function HistoriaPage() {
  const heroRef = useRef(null)
  const block1Ref = useRef(null)
  const block2Ref = useRef(null)
  const block3Ref = useRef(null)

  const isBlock1InView = useInView(block1Ref, { once: true, margin: "-100px" })
  const isBlock2InView = useInView(block2Ref, { once: true, margin: "-100px" })
  const isBlock3InView = useInView(block3Ref, { once: true, margin: "-100px" })

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"])
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl mb-6 text-primary"
          >
            Nuestra Historia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
          >
            Una tradición familiar que perdura en cada cucharada
          </motion.p>
        </motion.div>
      </section>
      

      {/* Story Content */}
      <section className="max-w-4xl mx-auto px-4 py-20 space-y-16">
        {/* Story Block 1 */}
        <div ref={block1Ref} className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isBlock1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl text-primary">El Comienzo</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La historia de nuestro dulce de leche se remonta a 1939, con una receta clásica y una tradición familiar ligada a la producción del dulce de leche. A lo largo de los años, nuestros fundadores recorrieron distintos emprendimientos, siempre impulsados por la misma pasión y convicción por este producto que nos representa.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde entonces, la pasión por este producto nos acompaña y define nuestro camino.
            </p>
          </motion.div>
          <motion.div
            variants={revealVariants}
            initial="hidden"
            animate={isBlock1InView ? "visible" : "hidden"}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/familiar.png"
              alt="Finca La Caramela"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Story Block 2 */}
        <div ref={block2Ref} className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <motion.div
            variants={revealVariants}
            initial="hidden"
            animate={isBlock2InView ? "visible" : "hidden"}
            className="relative h-[400px] rounded-lg overflow-hidden md:order-first order-last"
          >
            <Image
              src="/historia.png"
              alt="Proceso Artesanal"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isBlock2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl text-primary">Nuestro Proceso</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
Nuestra planta productiva se encuentra en Ranchos, partido de General Paz, provincia de Buenos Aires, un pueblo ubicado a 100 km de la Capital Federal. Esta localización estratégica nos permite desarrollar con eficiencia nuestra actividad productiva y comercial.     </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
Actualmente, Finca La Caramela continúa siendo una empresa familiar que crece año a año, manteniendo la misma impronta de sus inicios            </p>
          </motion.div>
        </div>

        {/* Story Block 3 */}
        <motion.div
          ref={block3Ref}
          variants={scrollFadeVariants}
          initial="hidden"
          animate={isBlock3InView ? "visible" : "hidden"}
          className="text-center space-y-6 py-12"
        >
          <h2 className="font-serif text-4xl text-primary">Nuestro Compromiso</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
En Finca La Caramela trabajamos con un objetivo claro: sostener altos estándares de calidad y excelencia en cada producto.          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
Honramos la tradición que nos define y apostamos al desarrollo industrial necesario para llevar nuestro dulce de leche a todo el país, reflejando en cada frasco nuestra historia y nuestros valores.          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-secondary/30 rounded-lg p-12 text-center"
        >
          <blockquote className="font-serif text-3xl text-primary mb-4">
            "Clásico, auténtico, inolvidable."
          </blockquote>
          <p className="text-muted-foreground text-lg">— Finca La Caramela</p>
        </motion.div>
      </section>
    </motion.main>
  )
}
