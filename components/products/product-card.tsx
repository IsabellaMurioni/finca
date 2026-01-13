"use client"

import { motion } from "framer-motion"
import ImageCarousel from "@/components/ui/image-carousel"

interface Product {
  id: number
  name: string
  description: string
  images: string[]
  weight: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const imgs = product.images && product.images.length ? product.images : ["/placeholder.svg"]

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-background rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow"
    >
      <div className="relative h-80 overflow-hidden bg-secondary/20">
        <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} className="w-full h-full">
          <ImageCarousel images={imgs} alt={product.name} />
        </motion.div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl text-primary">{product.name}</h3>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-sm font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full"
          >
            {product.weight}
          </motion.span>
        </div>
        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
      </div>
    </motion.div>
  )
}
