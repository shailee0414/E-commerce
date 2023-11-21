import React from "react"
import Home from "./screen/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetail from "./components/productDetail/ProductDetail"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App