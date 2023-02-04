import { useState, createContext, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd, quantityToAdd = 1) => {
  // find if exists
  let itemExists = false
  const newCartItems = cartItems.map(item => {
    if (item.id === productToAdd.id) {
      item.quantity += quantityToAdd
      itemExists = true
    }
    return item
  })

  if(!itemExists) {
    newCartItems.push({...productToAdd, quantity: quantityToAdd})
  }

  return newCartItems
}

const deleteCartItem = (cartItems, productId) => {
  return cartItems.filter(item => item.id !== productId)
}

const calcTotal = (cartItems) => {
  return cartItems.reduce((result, item) => {
    result.totalQuantity += item.quantity
    result.totalPrice += item.quantity * item.price
    return result
  }, {totalQuantity: 0, totalPrice: 0})
}

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const reduceItemFromCart = productToReduce => {
    setCartItems(addCartItem(cartItems, productToReduce, -1))
  }

  const deleteItemFromCart = productId => {
    setCartItems(deleteCartItem(cartItems, productId))
  }

  useEffect(() => {
    const total = calcTotal(cartItems)
    setTotalQuantity(total.totalQuantity)
    setTotalPrice(total.totalPrice)
  }, [cartItems])

  const value = { cartItems, totalPrice, totalQuantity, addItemToCart, reduceItemFromCart, deleteItemFromCart, showCart, setShowCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
