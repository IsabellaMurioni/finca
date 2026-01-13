"use client"

import ProductCard from "@/components/products/product-card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

const products = [
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
  },
  {
    id: 4,
    name: "Línea Repostero",
    description: "Consistencia firme e ideal para alfajores, tortas y rellenos, manteniendo su forma, sabor intenso y excelente desempeño en aplicaciones de pastelería.",
    images: ["/repostero2.png", "/repostero3.png"],
    weight: "400g/10kg",
  },
  {
    id: 5,
    name: "Línea Alfajorero",
    description: "Consistencia firme e ideal para alfajores, con cuerpo estable, fácil de manejar y un sabor intenso que realza cada bocado, garantizando un acabado profesional.",
    images: ["/alfajorero.png"],
    weight: "10kg",
  },
  {
    id: 6,
    name: "Línea Heladero",
    description: "Formulada especialmente para heladerías artesanales, ofreciendo una textura homogénea, excelente rendimiento y un sabor auténtico.",
    images: ["/heladero.png"],
    weight: "12kg",
  }
]

export default function ProductosPage() {
  const gridRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, margin: "-50px" })

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-secondary">
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
            Nuestros Productos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
          >
            Cada variedad elaborada con dedicación artesanal y los mejores ingredientes
          </motion.p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section ref={gridRef} className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={staggerItemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="bg-secondary/30 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 text-center space-y-6"
        >
          <h2 className="font-serif text-4xl text-primary">Calidad en Cada Frasco</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde nuestra planta en Ranchos, provincia de Buenos Aires, seguimos creciendo como empresa familiar, combinando experiencia, desarrollo y compromiso, para llevar a todo el país un dulce de leche que represente nuestra historia, nuestra pasión y nuestra manera de hacer las cosas.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada frasco es una expresión de ese propósito: compartir un producto auténtico, fiel a su origen y pensado para perdurar.
          </p>
        </motion.div>
      </section>
    </motion.main>
  )
}
