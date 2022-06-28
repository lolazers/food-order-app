import React, { useState, createContext, useContext } from 'react';

const CartContext = React.createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemHandler = (item) => {
    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) => {
          return cartItem.id === item.id
            ? { ...itemExists, quantity: itemExists.quantity + item.quantity }
            : cartItem;
        })
      );
    } else {
      setCartItems((prevItems) => {
        return [...prevItems, item];
      });
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        addToCart: addItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
