import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [count, setCount] = useState(0)
    const [showCart, setShowCart] = useState(false)

    const value = {count, setCount, showCart, setShowCart}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}