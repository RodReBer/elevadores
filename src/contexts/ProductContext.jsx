"use client"

import { createContext, useState, useEffect, useContext } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"

const ProductContext = createContext()

export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"))
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setProducts(productsData)
        setLoading(false)
      } catch (err) {
        setError("Error al cargar los productos")
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct])
  }

  return <ProductContext.Provider value={{ products, loading, error, addProduct }}>{children}</ProductContext.Provider>
}

