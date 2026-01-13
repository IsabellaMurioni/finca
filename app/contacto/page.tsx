"use client"

import ContactForm from "@/components/contact/contact-form"
import { MapPin, Phone, Mail } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

export default function ContactoPage() {
  const infoRef = useRef(null)
  const isInfoInView = useInView(infoRef, { once: true, margin: "-100px" })

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-4 text-primary">Contacto</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">Nos encantaría saber de vos</p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl text-primary mb-8">Hablemos</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                ¿Tenés una consulta sobre nuestros productos? ¿Querés hacer un pedido especial? ¿Necesitás información
                para tu comercio? Completá el formulario y te responderemos a la brevedad.
              </p>
            </motion.div>

            <motion.div
              ref={infoRef}
              variants={staggerContainerVariants}
              initial="hidden"
              animate={isInfoInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={staggerItemVariants} className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                </div>
              </motion.div>

              <motion.div variants={staggerItemVariants} className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+54 9 11 2385 8254</p>
                </div>
              </motion.div>

              <motion.div variants={staggerItemVariants} className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">administracion@fincalacaramela.com.ar</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-secondary/50 p-8 rounded-lg"
            >
              <h3 className="font-serif text-2xl text-primary mb-4">Horarios de Atención</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-semibold">Lunes a Viernes:</span> 9:00 - 18:00
                </p>
                <p>
                  <span className="font-semibold">Sábados:</span> 9:00 - 13:00
                </p>
                <p>
                  <span className="font-semibold">Domingos:</span> Cerrado
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.main>
  )
}
