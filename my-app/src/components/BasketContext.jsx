// BasketContext.js
import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addToBasket = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    return (
        <BasketContext.Provider value={{ products, addToBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasketContext = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error('useBasketContext must be used within a BasketProvider');
    }
    return context;
};
