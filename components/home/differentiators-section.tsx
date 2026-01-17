"use client"

import { Leaf, Heart, Award, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { scrollFadeVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/easings"

const differentiators = [
  {
    icon: Heart,
    title: "Tradición familiar",
    description:
      "Receta original y saber hacer transmitido desde 1939, con una historia que respalda nuestra autenticidad.",
  },
  {
    icon: Leaf,
    title: "Alta calidad",
    description:
      "Elaborados con ingredientes seleccionados, procesos controlados que garantizan sabor, textura y excelencia.",
  },
  {
    icon: Clock,
    title: "Especialización",
    description:
      "Amplia experiencia en la industria y desarrollo de variedades: clásico, heladero, alfajorero y repostero.",
  },
  {
    icon: Award,
    title: "Producción argentina",
    description:
      "Planta productiva en la provincia de Bs.As, con control de calidad y logística eficiente para el mercado nacional.",
  },
]

export default function DifferentiatorsSection() {
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
          <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">Lo Que Nos Distingue</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nuestro compromiso con la excelencia en cada detalle
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-4 p-6 rounded-lg hover:bg-secondary/30 transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full"
                >
                  <Icon className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="font-serif text-2xl text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
