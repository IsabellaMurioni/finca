import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="block -ml-2 flex justify-center md:block">
              <Image
                src="/logo-footer.png"
                alt="Finca La Caramela"
                width={520}
                height={180}
                className="h-28 md:h-36 lg:h-44 object-contain"
              />
              <span className="sr-only">Finca La Caramela</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/historia"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Ranchos, General Paz</li>
              <li>administracion@fincalacaramela.com.ar</li>
              <li>+54 9 11 2385 8254</li>
            </ul>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/fincalacaramela.srl/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/fincalacaramela/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <Link
                href="/contacto"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} Finca La Caramela. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
