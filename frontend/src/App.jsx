import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import SearchResults from './pages/SearchResults.jsx'
import Admin from './pages/Admin.jsx'
import { CartProvider } from './context/CartContext.jsx'

export default function App(){
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/search' element={<SearchResults/>} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
