import React, { createContext, useContext, useState, useEffect } from 'react'
const CartContext = createContext()
export function useCart(){ return useContext(CartContext) }
export function CartProvider({ children }){
  const [cart, setCart] = useState([])
  useEffect(()=>{ const s = localStorage.getItem('cart'); if(s) setCart(JSON.parse(s)) },[])
  useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(cart)) },[cart])
  const addToCart = (p) => {
    setCart(prev=>{
      const ex = prev.find(i=>i.id===p.id)
      if(ex) return prev.map(i=> i.id===p.id ? {...i, qty: i.qty+1} : i)
      return [...prev, {...p, qty:1}]
    })
  }
  const removeFromCart = (id) => setCart(prev=> prev.filter(i=> i.id!==id))
  const clearCart = ()=> setCart([])
  const total = cart.reduce((s,i)=> s + (Number(i.price)||0) * (i.qty||1), 0)
  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, total}}>{children}</CartContext.Provider>
}
