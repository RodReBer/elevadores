"use client"

import React from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">ElevaPro</div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-red-200">
            Inicio
          </a>
          <a href="#" className="hover:text-red-200">
            Productos
          </a>
          <a href="#" className="hover:text-red-200">
            Servicios
          </a>
          <a href="#" className="hover:text-red-200">
            Contacto
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4">
            <a href="/" className="py-2 hover:text-red-200">
              Inicio
            </a>
            <a href="#" className="py-2 hover:text-red-200">
              Productos
            </a>
            <a href="#" className="py-2 hover:text-red-200">
              Servicios
            </a>
            <a href="#" className="py-2 hover:text-red-200">
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

