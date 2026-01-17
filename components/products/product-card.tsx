"use client"

import type React from "react"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ProductVariant {
  image: string
  weight: string
  features: string[]
}

interface Product {
  id: number
  name: string
  description: string
  variants: ProductVariant[]
}

interface ProductCardProps {
  product: Product
  onClick?: () => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex < product.variants.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const currentVariant = product.variants[currentIndex]

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-background rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow cursor-pointer"
    >
      <div className="relative h-80 overflow-hidden bg-secondary/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.08 }}
            className="w-full h-full"
          >
            <Image src={currentVariant.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </motion.div>
        </AnimatePresence>

        {product.variants.length > 1 && (
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-between p-3 pointer-events-none"
              >
                <motion.button
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  onClick={prevImage}
                  disabled={currentIndex === 0}
                  className="pointer-events-auto p-2.5 bg-background/95 backdrop-blur-md rounded-full hover:bg-background hover:scale-110 transition-all shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 border border-primary/10"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </motion.button>

                <motion.button
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  onClick={nextImage}
                  disabled={currentIndex === product.variants.length - 1}
                  className="pointer-events-auto p-2.5 bg-background/95 backdrop-blur-md rounded-full hover:bg-background hover:scale-110 transition-all shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 border border-primary/10"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {product.variants.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {product.variants.map((_, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0.8 }}
                animate={{ scale: index === currentIndex ? 1.2 : 1 }}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(index)
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? "w-6 bg-white shadow-lg" : "w-1.5 bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl text-primary">{product.name}</h3>
          <AnimatePresence mode="wait">
            <motion.span
              key={`weight-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-sm font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full"
            >
              {currentVariant.weight}
            </motion.span>
          </AnimatePresence>
        </div>
        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
      </div>
    </motion.div>
  )
}
