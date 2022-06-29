import React, { useState, useEffect, useContext } from 'react';

const CartContext = React.createContext({
  showCartModal: false,
});

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

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

  const closeModalHandler = () => {
    setShowCartModal(false);
  };

  const showModalHandler = () => {
    setShowCartModal(true);
  };

  const orderHandler = () => {
    console.log('Ordering...');
  };

  const incrementHandler = (item) => {
    return setCartItems(
      cartItems.map((cartItem) => {
        return cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      })
    );
  };

  const decrementHandler = (item) => {
    const decrementedItems = cartItems.map((cartItem) => {
      return cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
    const quantityCheckedItems = decrementedItems.filter((cartItem) => {
      return cartItem.quantity > 0;
    });
    setCartItems(quantityCheckedItems);
  };

  // useEffect(() => {
  //   return setCartItems(
  //     cartItems.filter((cartItem) => {
  //       return cartItem.quantity > 0;
  //     })
  //   );
  // }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        cartModal: showCartModal,
        addToCart: addItemHandler,
        showModal: showModalHandler,
        closeModal: closeModalHandler,
        incrementOrder: incrementHandler,
        decrementOrder: decrementHandler,
        order: orderHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
