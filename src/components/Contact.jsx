import { Phone, Mail, MapPin, Send } from "lucide-react"

const Contact = () => {
  return (
    <section id="Contacto" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Cont&aacute;ctenos</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Informaci&oacute;n de Contacto</h3>
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Phone className="text-red-600 w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Tel&eacute;fono</p>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Mail className="text-red-600 w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-gray-600">info@elevapro.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <MapPin className="text-red-600 w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Direcci&oacute;n</p>
                <p className="text-gray-600">123 Calle Principal, Montevideo, Uruguay</p>
              </div>
            </div>
          </div>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Env&iacute;enos un mensaje</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 min-h-28 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

