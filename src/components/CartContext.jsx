import React, { createContext, useState } from 'react';
 
export const CartContext = createContext();
 
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
 
  const addToCart = (id, name, price, quantity) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { id, name, price, quantity }];
      }
    });
  };
 
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
 
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
 
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};


