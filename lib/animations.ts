"use client"

import type { Variants } from "framer-motion"

// Custom easing curves for elegant, slow animations
export const easings = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  slowOut: [0.16, 1, 0.3, 1],
  elegant: [0.25, 0.46, 0.45, 0.94],
}

// Hero section animations - fade + slide with stagger
export const heroVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: easings.elegant,
      staggerChildren: 0.2,
    },
  },
}

export const heroChildVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easings.smooth,
    },
  },
}

// Scroll-triggered fade + translate Y animations
export const scrollFadeVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easings.slowOut,
    },
  },
}

// Stagger container for cards and lists
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// Individual card/item animation
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
}

// Premium hover effect for product cards
export const cardHoverVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.4,
      ease: easings.elegant,
    },
  },
}

// Parallax image zoom effect
export const parallaxZoomVariants: Variants = {
  initial: { scale: 1.1 },
  animate: {
    scale: 1,
    transition: {
      duration: 8,
      ease: "linear",
    },
  },
}

// Reveal effect with mask/clip-path simulation
export const revealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, clipPath: "inset(10% 10% 10% 10%)" },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.2,
      ease: easings.slowOut,
    },
  },
}

// Page transition variants
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: easings.smooth,
    },
  },
}

// Microinteraction for buttons
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: easings.elegant,
    },
  },
  tap: {
    scale: 0.98,
  },
}

// Input focus animation
export const inputFocusVariants: Variants = {
  initial: { scale: 1, borderColor: "rgba(0,0,0,0.1)" },
  focus: {
    scale: 1.01,
    borderColor: "rgba(194, 146, 89, 0.5)",
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
}
