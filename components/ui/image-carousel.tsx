"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

interface Props {
  images: string[]
  alt?: string
  className?: string
}

export default function ImageCarousel({ images = [], alt = "", className = "" }: Props) {
  const [index, setIndex] = useState(0)
  const imgs = images.length ? images : ["/placeholder.svg"]

  const prev = () => setIndex((index - 1 + imgs.length) % imgs.length)
  const next = () => setIndex((index + 1) % imgs.length)

  return (
    <div
      role="region"
      aria-label="Galería de imágenes"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev()
        if (e.key === "ArrowRight") next()
      }}
      className={`relative w-full h-80 overflow-hidden ${className} group`}
    >
      <motion.div
        key={imgs[index]}
        initial={{ opacity: 0.65, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0"
      >
        <Image src={imgs[index]} alt={alt} fill className="object-cover" />
        {/* subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Arrows */}
      {imgs.length > 1 && (
        <>
          <button
            onClick={prev}
            onMouseDown={(e) => e.currentTarget.blur()}
            onTouchStart={(e) => e.currentTarget.blur()}
            aria-label="Imagen anterior"
            title="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 text-white flex items-center justify-center opacity-0 group-hover:opacity-90 group-focus:opacity-90 pointer-events-none group-hover:pointer-events-auto group-focus:pointer-events-auto transition-opacity duration-150 transform group-hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Siguiente imagen"
            title="Siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 text-white flex items-center justify-center opacity-90 hover:opacity-100 transition-transform duration-150 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}
