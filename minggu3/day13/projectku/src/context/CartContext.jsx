import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (product) => {
        setCart((prev) => [...prev, product]);
        setTotalPrice((prev) => prev + product.price);
    };
    const removeItem = (id) => {
        const itemToRemove = cart.find((item) => item.id === id);
        if(itemToRemove) {
            setCart((prev) => prev.filter((item) => item.id !== id));
            setTotalPrice((prev) => prev - itemToRemove.price);
        }
    };
    const clearCart = () => {
        setCart([]);
        setTotalPrice(0);
    };

    return (
        <CartContext.Provider value={{cart, totalPrice, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};