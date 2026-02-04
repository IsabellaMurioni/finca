"use client"

import ProductCard from "@/components/products/product-card"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/easings"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProductsByIds, type Product } from "@/lib/products"

// IDs de los productos destacados que querés mostrar en el inicio
const FEATURED_PRODUCT_IDS = [1, 2, 3]

export default function FeaturedProducts() {
  const gridRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, margin: "-50px" })
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Obtener solo los productos destacados por ID
  const featuredProducts = getProductsByIds(FEATURED_PRODUCT_IDS)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProduct && currentImageIndex < selectedProduct.variants.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const currentVariant = selectedProduct?.variants[currentImageIndex]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Productos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Descubrí nuestras líneas más populares</p>
        </motion.div>

        {/* Products Grid */}
        <div ref={gridRef}>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isGridInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItemVariants}>
                <ProductCard product={product} onClick={() => handleProductClick(product)} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Ver todos los productos button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/productos">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="text-lg px-8 py-6 group bg-[#5b3a29] text-white border border-transparent hover:bg-transparent hover:border-[#5b3a29] hover:text-[#5b3a29] transition-colors duration-300">
                Ver todos los productos
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Modal - exactamente igual que en la página de productos */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-2 md:p-4 lg:p-8"
            >
              <div
                className="
                  relative
                  w-full
                  max-w-[1100px]
                  h-auto
                  sm:h-[88vh]
                  max-h-[none]
                  sm:max-h-[820px]
                  bg-background
                  rounded-[20px]
                  shadow-2xl
                  overflow-hidden
                  flex
                  flex-col
                "
              >

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 sm:top-6 sm:right-6 z-20 p-2 hover:opacity-80 transition-opacity"
                  aria-label="Cerrar modal"
                >
                  <X className="w-6 h-6 text-primary" />
                </button>

                {/* Content: Horizontal Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full overflow-y-auto">
                  {/* Left Side: Large Image with Carousel */}
                  <div className="relative flex items-start sm:items-center justify-center p-0 sm:bg-secondary/30 sm:p-6 md:p-8 lg:p-12 min-h-[280px] sm:min-h-auto">
                    <div className="relative w-full max-w-xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-full rounded-[20px] shadow-2xl overflow-hidden"
                          style={{
                            aspectRatio: "auto",
                            height: "auto",
                            maxHeight: "clamp(300px, 70vw, 500px)",
                          }}
                        >
                          <Image
                            src={selectedProduct.variants[currentImageIndex].image || "/placeholder.svg"}
                            alt={`${selectedProduct.name} - Imagen ${currentImageIndex + 1}`}
                            width={800}
                            height={600}
                            className="w-full h-full object-contain rounded-[20px]"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Carousel Controls */}
                      {selectedProduct.variants.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                          <motion.button
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.05 }}
                            onClick={prevImage}
                            disabled={currentImageIndex === 0}
                            className="pointer-events-auto p-3 bg-background/90 backdrop-blur-md rounded-full hover:bg-background hover:scale-110 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                            aria-label="Imagen anterior"
                          >
                            <ChevronLeft className="w-6 h-6 text-primary" />
                          </motion.button>

                          <motion.button
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.05 }}
                            onClick={nextImage}
                            disabled={currentImageIndex === selectedProduct.variants.length - 1}
                            className="pointer-events-auto p-3 bg-background/90 backdrop-blur-md rounded-full hover:bg-background hover:scale-110 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                            aria-label="Imagen siguiente"
                          >
                            <ChevronRight className="w-6 h-6 text-primary" />
                          </motion.button>
                        </div>
                      )}

                      {/* Image Indicators */}
                      {selectedProduct.variants.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {selectedProduct.variants.map((_, index) => (
                            <motion.button
                              key={index}
                              initial={{ scale: 0.8 }}
                              animate={{ scale: index === currentImageIndex ? 1.2 : 1 }}
                              onClick={(e) => {
                                e.stopPropagation()
                                setCurrentImageIndex(index)
                              }}
                              className={`h-1.5 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? "w-6 bg-white shadow-lg"
                                  : "w-1.5 bg-white/60 hover:bg-white/80"
                              }`}
                              aria-label={`Ver imagen ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side: Product Information */}
                  <div className="flex flex-col justify-start sm:justify-center px-3 pt-3 pb-8 sm:pb-0 sm:py-4 sm:p-4 md:p-6 lg:p-8 overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="space-y-2 sm:space-y-3 md:space-y-4"
                    >
                      {/* Weight Badge */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`weight-${currentImageIndex}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="inline-block mt-1 sm:mt-0"
                        >
                          <span className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold bg-accent/20 text-accent px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                            {currentVariant?.weight}
                          </span>
                        </motion.div>
                      </AnimatePresence>

                      {/* Product Name */}
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-serif text-lg sm:text-xl md:text-3xl lg:text-4xl text-primary leading-tight"
                      >
                        {selectedProduct.name}
                      </motion.h2>

                      {/* Subtitle - only for product 6 (Variegatos) */}
                      {selectedProduct.id === 6 && currentVariant?.subtitle && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.45 }}
                          className="text-xs sm:text-sm md:text-base text-accent font-medium italic"
                        >
                          Sabor: {currentVariant.subtitle}
                        </motion.p>
                      )}

                      {/* Divider */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="h-[2px] bg-gradient-to-r from-accent/50 to-transparent origin-left"
                      />

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed"
                      >
                        {selectedProduct.description}
                      </motion.p>

                      {/* Features */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`features-${currentImageIndex}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="pt-3 space-y-4"
                        >
                          {currentVariant?.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                              <p className="text-xs sm:text-sm text-muted-foreground">{feature}</p>
                            </motion.div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
