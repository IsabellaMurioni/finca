"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formState.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formState.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Simulate form submission
    console.log("Form submitted:", formState)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-accent/10 border-2 border-accent rounded-lg p-12 text-center space-y-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4"
        >
          <Check className="w-8 h-8 text-white" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-serif text-3xl text-primary"
        >
          ¡Mensaje Enviado!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-muted-foreground text-lg"
        >
          Gracias por contactarnos. Te responderemos a la brevedad.
        </motion.p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-secondary/20 p-8 rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="space-y-2"
      >
        <Label htmlFor="name" className="text-base font-semibold">
          Nombre Completo *
        </Label>
        <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
          <Input
            id="name"
            type="text"
            value={formState.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`h-12 text-base transition-all ${errors.name ? "border-red-500" : ""}`}
            placeholder="Nombre y Apellido"
          />
        </motion.div>
        {errors.name && (
          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500">
            {errors.name}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-2"
      >
        <Label htmlFor="email" className="text-base font-semibold">
          Email *
        </Label>
        <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
          <Input
            id="email"
            type="email"
            value={formState.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`h-12 text-base transition-all ${errors.email ? "border-red-500" : ""}`}
            placeholder="email@ejemplo.com"
          />
        </motion.div>
        {errors.email && (
          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500">
            {errors.email}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-2"
      >
        <Label htmlFor="message" className="text-base font-semibold">
          Mensaje *
        </Label>
        <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
          <Textarea
            id="message"
            value={formState.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className={`min-h-[150px] text-base transition-all ${errors.message ? "border-red-500" : ""}`}
            placeholder="Contanos en qué podemos ayudarte..."
          />
        </motion.div>
        {errors.message && (
          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500">
            {errors.message}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button type="submit" size="lg" className="w-full text-lg py-6">
            Enviar Mensaje
          </Button>
        </motion.div>
      </motion.div>

      <p className="text-sm text-muted-foreground text-center">* Campos requeridos</p>
    </motion.form>
  )
}
