import React from 'react';
import styled from 'styled-components';
import CartIcon from './CartIcon';

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

const Cart = (props) => {
  return (
    <ParentDiv>
      <CartIcon />
      <div>Your Cart</div>
      <ItemsDiv>{props.quantity || 0}</ItemsDiv>
    </ParentDiv>
  );
};

export default Cart;
