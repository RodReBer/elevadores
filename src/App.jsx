import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import AdminPage from "./pages/AdminPage"
import ScrollToTop from "./components/ScrollToTop"
import { ProductProvider } from "./contexts/ProductContext"

function App() {
  return (
    <ProductProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ProductProvider>
  )
}

export default App

