// Tipos compartidos para productos
export interface ProductVariant {
  image: string
  weight: string
  features: string[]
  subtitle?: string
}

export interface Product {
  id: number
  name: string
  description: string
  variants: ProductVariant[]
}

// Datos centralizados de productos
export const products: Product[] = [
  {
    id: 1,
    name: "Línea Familiar",
    description:
      "Presentaciones pensadas para el consumo diario en casa, con el sabor tradicional de siempre y la cremosidad justa.",
    variants: [
      {
        image: "/familiar200.png",
        weight: "200g",
        features: [
          "Formato de 200 gramos: 36 unidades por caja",
          "Potes de plástico, resistentes y fáciles de manipular",
          "Vida útil de 8 meses",
        ],
      },
      {
        image: "/familiar4.png",
        weight: "400g",
        features: [
          "Formato de 400 gramos: 12 unidades por caja",
          "Potes de plástico, resistentes y fáciles de manipular",
          "Vida útil de 8 meses",
        ],
      },
      {
        image: "/clasico2.png",
        weight: "450g",
        features: [
          "Formato de 450 gramos: 12 unidades por caja",
          "Envase de vidrio, resistente y reutilizable",
          "Vida útil de 1 año",
        ],
      },
      {
        image: "/familiar6.png",
        weight: "500g",
        features: [
          "Formato de 500 gramos: 16 unidades por caja",
          "Envase de cartón, práctico y reciclable",
          "Vida útil de 3 meses",
        ],
      },
      {
        image: "/familiar1.png",
        weight: "1kg",
        features: [
          "Formato de 1kg: 12 unidades por caja",
          "Envase de cartón, práctico y reciclable",
          "Vida útil de 3 meses",
        ],
      },
      {
        image: "/familiar10.png",
        weight: "10kg",
        features: [
          "Formato de 10kg",
          "Envase de cartón y plastico, ideal para consumo familiar",
          "Vida útil de 3 meses a 1 año, dependiendo del envase",
        ],
      },
      {
        image: "/familiar25.png",
        weight: "25kg",
        features: [
          "Formato de 25kg",
          "Envase primario en bolsa plástica y secundario en pote de cartón",
          "Vida útil de 1 año",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Línea Repostero",
    description:
      "Consistencia firme e ideal para alfajores, tortas y rellenos, excelente desempeño en aplicaciones de pastelería.",
    variants: [
      {
        image: "/repostero2.png",
        weight: "400g",
        features: [
          "Formato de 400 gramos: 12 unidades por caja",
          "Potes de plástico, resistentes y fáciles de manipular",
          "Vida útil 8 meses",
        ],
      },
      {
        image: "/repostero3.png",
        weight: "10kg",
        features: [
          "Formato de 10kg: repostero y alfajorero",
          "Envase de cartón, práctico y reciclable",
          "Vida útil de 3 meses",
        ],
      },
      {
        image: "/repostero25.png",
        weight: "25kg",
        features: [
          "Formato de 25kg: repostero y alfajorero",
          "Envase primario en bolsa plástica y secundario en pote de cartón",
          "Vida útil de 1 año",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Línea Heladero",
    description:
      "Formulada especialmente para heladerías artesanales, ofreciendo una textura homogénea y un sabor auténtico.",
    variants: [
      {
        image: "/heladero12.png",
        weight: "12kg",
        features: ["Formato de 12kg", "Envase de plástico resistente, ideal para heladerías", "Vida útil de 1 año"],
      },
      {
        image: "/heladero.png",
        weight: "25kg",
        features: [
          "Formato de 25kg",
          "Envase primario en bolsa plástica y secundario en pote de cartón",
          "Vida útil de 1 año",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Línea Anamá Clásico",
    description:
      "Variedad clásica premium, con ingredientes seleccionados, elaboradas para lograr una textura suave y un sabor auténtico.",
    variants: [
      {
        image: "/anama2.png",
        weight: "400g",
        features: ["Formato de 400 gramos: 12 unidades por caja", "Textura suave y cremosa", "Vida útil de 8 meses"],
      },
      {
        image: "/anama10.png",
        weight: "10kg",
        features: [
          "Formato de 10 kg: familiar y repostero",
          "Envase de cartón. Textura firme, ideal para repostería",
          "Vida útil de 3 meses",
        ],
      },
      {
        image: "/anama25.png",
        weight: "25kg",
        features: [
          "Formato de 25 kg: familiar, repostero y heladero",
          "Envase primario en bolsa plástica y secundario en pote de cartón",
          "Vida útil de 1 año",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Línea Dutella",
    description:
      "La fusión perfecta entre dulce de leche y crema de avellanas, con un sabor profundo que conquista desde la primera cucharada.",
    variants: [
      {
        image: "/dutella.png",
        weight: "4kg",
        features: ["Formato de 4kg", "Ideal para gastronomía con: avellanas, chocolates, cookies, banana, rhum y café", "Vida útil de 1 año"],
      },
    ],
  },
  
  {
    id: 6,
    name: "Variegatos",
    description:
      "Elaborados con ingredientes seleccionados que garantizan una textura perfecta y un sabor auténtico.",
    variants: [
      {
        image: "/cookies.png",
        weight: "10/25kg",
        subtitle: "Cookies",
        features: [
          "Formato de 10 kg y 25 kg",
          "Envase en pote de cartón, apto para uso alimentario",
          "Vida útil prolongada",
        ],
      },
      {
        image: "/cafe.png",
        weight: "10/25kg",
        subtitle: "Café",
        features: ["Formato de 10 kg y 25 kg", "Envase en pote de cartón, apto para uso alimentario", "Vida útil prolongada"],
      },
      {
        image: "/rhum.png",
        weight: "10/25kg",
        subtitle: "Rhum",
        features: [
          "Formato de 10 kg y 25 kg",
          "Envase en pote de cartón, apto para uso alimentario",
          "Vida útil prolongada",
        ],
      },
      {
        image: "/banana.png",
        weight: "10/25kg",
        subtitle: "Banana",
        features: [
          "Formato de 10 kg y 25 kg",
          "Envase en pote de cartón, apto para uso alimentario",
          "Vida útil prolongada",
        ],
      }
    ],
  },
]

// Función helper para obtener productos por IDs
export function getProductsByIds(ids: number[]): Product[] {
  return products.filter((product) => ids.includes(product.id))
}

// Función helper para obtener un producto por ID
export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}
