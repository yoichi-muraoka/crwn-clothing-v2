import { useState, createContext } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  // find if exists
  let itemExists = false
  const newCartItems = cartItems.map(item => {
    if (item.id === productToAdd.id) {
      item.quantity += 1
      itemExists = true
    }
    return item
  })

  if(!itemExists) {
    newCartItems.push({...productToAdd, quantity: 1})
  }

  return newCartItems
}

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = { cartItems, setCartItems, addItemToCart, showCart, setShowCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
