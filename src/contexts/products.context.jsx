import { createContext, useState, useEffect } from 'react';
import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(null);

    // コンテキストにから配布するデータ
    const value = {products, setProducts}

    useEffect(() => {
      setProducts(PRODUCTS)
    }, [])
    

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}