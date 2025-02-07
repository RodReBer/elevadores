import { Link } from "react-router-dom"

const ProductCard = ({ id, name, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={`/product/${id}`}
        className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
      >
        Ver Detalles
      </Link>
    </div>
  </div>
)

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Plataforma Tijera",
      description: "Ideal para trabajos en interiores con altura de hasta 10 metros.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Plataforma Articulada",
      description: "Perfecta para acceder a lugares de difícil acceso con gran alcance.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Plataforma Telescópica",
      description: "Máxima altura y alcance para trabajos en exteriores.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

