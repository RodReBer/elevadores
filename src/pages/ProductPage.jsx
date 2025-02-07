"use client"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import { useProducts } from "../contexts/ProductContext"
import RelatedProducts from "../components/RelatedProducts"
import { useEffect } from "react"

const ProductPage = () => {
  const { id } = useParams()
  const { products, loading, error } = useProducts()

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Cargando producto...</div>
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-center text-red-600">Error: {error}</div>
  }

  const product = products.find((p) => p.id === id)

  if (!product) {
    return <div className="container mx-auto px-4 py-8 text-center">Producto no encontrado</div>
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

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

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2">Especificaciones</h2>
            <ul className="space-y-2">
              <li>
                <strong>Marca:</strong> {product.brand}
              </li>
              <li>
                <strong>Modelo:</strong> {product.model}
              </li>
              <li>
                <strong>Altura m&aacute;xima:</strong> {product.maxHeight} metros
              </li>
              <li>
                <strong>Capacidad de carga:</strong> {product.maxLoad} kg
              </li>
              <li>
                <strong>Fuente de energ&iacute;a:</strong> {product.powerSource}
              </li>
              {product.operationTime && (
                <li>
                  <strong>Tiempo de operaci&oacute;n:</strong> {product.operationTime} horas
                </li>
              )}
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-3">Caracter&iacute;sticas</h2>
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

          <button className="bg-red-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
            Solicitar Cotizaci&oacute;n
          </button>
        </div>
      </div>

      <RelatedProducts currentProductId={id} category={product.category} />
    </div>
  )
}

export default ProductPage

