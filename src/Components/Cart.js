import React, { useState } from 'react';
import styled from 'styled-components';
import { useCartContext } from './CartContext';
import CartIcon from './CartIcon';
import CartModal from './CartModal';

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  background-color: #581b04;
  width: auto;
  height: 3rem;
  padding: 0 2.5rem;
`;

const ItemsDiv = styled.div`
  background-color: #8a2b06;
  display: flex;
  justify-content: center;
  padding: 0.2rem 0.9rem;
  border-radius: 40%;
  margin-left: 1rem;
`;

const Cart = () => {
  const cartContext = useCartContext();
  let { totalQuantity, cartTotal } = cartContext.cartItems.reduce(
    (total, cartItem) => {
      const { quantity, price } = cartItem;
      total.totalQuantity += quantity;
      total.cartTotal += quantity * price;
      return total;
    },
    {
      totalQuantity: 0,
      cartTotal: 0,
    }
  );

  cartTotal = Math.round(cartTotal * 100) / 100;

  return (
    <ParentDiv onClick={cartContext.showModal}>
      {cartContext.cartModal && (
        <CartModal items={cartContext.cartItems} totalAmount={cartTotal} />
      )}

      <CartIcon />
      <div>Your Cart</div>
      <ItemsDiv>{totalQuantity}</ItemsDiv>
    </ParentDiv>
  );
};

export default Cart;
