import { Truck, PenToolIcon as Tools, PhoneCall } from "lucide-react"

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-red-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Entregamos nuestras plataformas elevadoras directamente en su sitio de trabajo.",
    },
    {
      icon: Tools,
      title: "Mantenimiento",
      description: "Ofrecemos servicios de mantenimiento y reparación para mantener su equipo en óptimas condiciones.",
    },
    {
      icon: PhoneCall,
      title: "Soporte 24/7",
      description: "Nuestro equipo de soporte está disponible las 24 horas para ayudarle con cualquier consulta.",
    },
  ]

  return (
    <section className="py-16 bg-red-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

