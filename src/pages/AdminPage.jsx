"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useProducts } from "../contexts/ProductContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { addProduct } = useProducts()

  const [product, setProduct] = useState({
    name: "",
    description: "",
    shortDescription: "",
    price: 0,
    category: "",
    features: [""],
    images: [""],
    stock: 0,
    brand: "",
    model: "",
    maxHeight: 0,
    maxLoad: 0,
    powerSource: "",
    operationTime: 0,
  })

  const handleLogin = (e) => {
    e.preventDefault()
    // En un escenario real, esto debería ser una autenticación más segura
    if (password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Contraseña incorrecta")
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleArrayInputChange = (e, index, field) => {
    const newArray = [...product[field]]
    newArray[index] = e.target.value
    setProduct((prev) => ({ ...prev, [field]: newArray }))
  }

  const addArrayField = (field) => {
    setProduct((prev) => ({ ...prev, [field]: [...prev[field], ""] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newProduct = {
        ...product,
        price: Number(product.price),
        stock: Number(product.stock),
        maxHeight: Number(product.maxHeight),
        maxLoad: Number(product.maxLoad),
        operationTime: Number(product.operationTime),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }
      const docRef = await addDoc(collection(db, "products"), newProduct)
      addProduct({ id: docRef.id, ...newProduct })
      alert("Producto añadido con éxito")
      navigate("/")
    } catch (error) {
      console.error("Error adding product: ", error)
      alert("Error al añadir el producto")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Acceso de Administrador</h1>
        <form onSubmit={handleLogin} className="max-w-sm">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full px-3 py-2 border rounded mb-4"
          />
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
            Acceder
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Añadir Nuevo Producto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Descripción</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Descripción Corta</label>
          <input
            type="text"
            name="shortDescription"
            value={product.shortDescription}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Precio</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Categoría</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Características</label>
          {product.features.map((feature, index) => (
            <input
              key={index}
              type="text"
              value={feature}
              onChange={(e) => handleArrayInputChange(e, index, "features")}
              className="w-full px-3 py-2 border rounded mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addArrayField("features")}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Añadir Característica
          </button>
        </div>
        <div>
          <label className="block mb-1">Imágenes (URLs)</label>
          {product.images.map((image, index) => (
            <input
              key={index}
              type="text"
              value={image}
              onChange={(e) => handleArrayInputChange(e, index, "images")}
              className="w-full px-3 py-2 border rounded mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addArrayField("images")}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Añadir Imagen
          </button>
        </div>
        <div>
          <label className="block mb-1">Stock</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Marca</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Modelo</label>
          <input
            type="text"
            name="model"
            value={product.model}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Altura Máxima (metros)</label>
          <input
            type="number"
            name="maxHeight"
            value={product.maxHeight}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Capacidad de Carga Máxima (kg)</label>
          <input
            type="number"
            name="maxLoad"
            value={product.maxLoad}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Fuente de Energía</label>
          <input
            type="text"
            name="powerSource"
            value={product.powerSource}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Tiempo de Operación (horas)</label>
          <input
            type="number"
            name="operationTime"
            value={product.operationTime}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
          Añadir Producto
        </button>
      </form>
    </div>
  )
}

export default AdminPage

