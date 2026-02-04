"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({ name: "", email: "", message: "" })
      }, 3000)
    } catch (error) {
      console.error("Error enviando email:", error)
      alert("Hubo un error al enviar el mensaje")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-accent/10 border-2 border-accent rounded-lg p-12 text-center space-y-4"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>

        <h3 className="font-serif text-3xl text-primary">
          ¡Mensaje enviado!
        </h3>

        <p className="text-muted-foreground text-lg">
          Gracias por contactarnos. Te responderemos a la brevedad.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 bg-secondary/20 p-8 rounded-lg"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Nombre completo *</Label>
        <Input
          id="name"
          value={formState.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={errors.name ? "border-red-500" : ""}
          placeholder="Nombre y apellido"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formState.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={errors.email ? "border-red-500" : ""}
          placeholder="email@ejemplo.com"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje *</Label>
        <Textarea
          id="message"
          value={formState.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={errors.message ? "border-red-500" : ""}
          placeholder="Contanos en qué podemos ayudarte…"
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={isLoading} className="w-full">
        {isLoading ? "Enviando..." : "Enviar mensaje"}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        * Campos requeridos
      </p>
    </motion.form>
  )
}
