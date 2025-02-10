"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Loader } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState("Inicio")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = ["Inicio", "Productos", "Servicios", "Contacto"]
      let currentSection = "Inicio"

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
          }
        }
      })

      setActiveItem(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleItemClick = (item) => {
    setIsMenuOpen(false)
    const element = document.getElementById(item)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: "Inicio", link: "/" },
    { name: "Productos", link: "/products" },
    { name: "Servicios", link: "/services" },
    { name: "Sobre Nosotros", link: "/about" },
    { name: "Contacto", link: "/contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 bg-red-600/90`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Loader className="w-8 h-8 text-white" />
          <span className="text-2xl font-bold text-white">ElevaPro</span>
        </Link>
        <nav className="hidden md:flex space-x-6 flex-grow justify-center">
          {["Inicio", "Productos", "Servicios"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`hover:text-red-200 text-red-100 transition-all duration-300 ${activeItem === item ? "border-b-2 border-white" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                handleItemClick(item)
              }}
            >
              {item}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="hidden md:block hover:text-red-200 text-red-100 transition-all duration-300" onClick={() => handleItemClick("Contacto")}>
          Contacto
        </a>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 bg-red-600/90 shadow-md">
            {["Inicio", "Productos", "Servicios", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`py-2 hover:text-red-200 text-red-100 transition-all duration-300 ${activeItem === item ? "border-b-2 border-white" : ""}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleItemClick(item)
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

