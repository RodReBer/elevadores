import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import RelatedProducts from "../components/RelatedProducts"

const ProductPage = () => {
  const { id } = useParams()
  // En un caso real, aquí cargarías los datos del producto basado en el ID
  const product = {
    name: "Plataforma Elevadora XYZ",
    description:
      "Plataforma elevadora de alta calidad con capacidad de elevación de hasta 10 metros. Perfecta para trabajos en interiores y exteriores.",
    features: [
      "Altura máxima: 10 metros",
      "Capacidad de carga: 300 kg",
      "Alimentación: Batería de litio",
      "Tiempo de operación: 8 horas",
      "Sistema de seguridad avanzado",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-800 mb-6">
        <ArrowLeft className="mr-2" />
        Volver a productos
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {product.images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img || "/placeholder.svg"}
                alt={`${product.name} - vista ${index + 2}`}
                className="w-full rounded-lg shadow"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <h2 className="text-2xl font-semibold mb-3">Características</h2>
          <ul className="list-disc list-inside mb-6">
            {product.features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>

          <div className="bg-red-100 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-3">Contacto</h2>
            <div className="flex items-center mb-2">
              <Phone className="mr-2 text-red-600" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-red-600" />
              <span>info@elevapro.com</span>
            </div>
          </div>

          <button className="cursor-pointer bg-red-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
            Solicitar Cotizaci&oacute;n
          </button>
        </div>
      </div>

      <RelatedProducts />
    </div>
  )
}

export default ProductPage

