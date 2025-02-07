const Footer = () => {
    return (
      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ElevaPro</h3>
              <p>Importadores directos de plataformas elevadoras de batería de alta calidad.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Enlaces R&aacute;pidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-red-200">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-200">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-200">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-200">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p>Calle Principal 123</p>
              <p>Montevideo, Uruguay</p>
              <p>Teléfono: +1 234 567 890</p>
              <p>Email: info@elevapro.com</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 ElevaPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  