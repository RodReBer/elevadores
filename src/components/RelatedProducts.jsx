import { Link } from "react-router-dom"

const RelatedProductCard = ({ id, name, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-32 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <Link
        to={`/product/${id}`}
        className="inline-block bg-red-600 text-white py-1 px-3 rounded text-sm hover:bg-red-700 transition duration-300"
      >
        Ver Detalles
      </Link>
    </div>
  </div>
)

const RelatedProducts = () => {
  const relatedProducts = [
    { id: 4, name: "Plataforma Vertical", imageUrl: "/placeholder.svg?height=150&width=200" },
    { id: 5, name: "Plataforma de Oruga", imageUrl: "/placeholder.svg?height=150&width=200" },
    { id: 6, name: "Plataforma Remolcable", imageUrl: "/placeholder.svg?height=150&width=200" },
  ]

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <RelatedProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts

