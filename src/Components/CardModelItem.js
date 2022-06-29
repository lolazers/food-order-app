import React from 'react';
import styled from 'styled-components';
import { useCartContext } from './CartContext';

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #8a2b06;

  & h2 {
    margin: 0;
  }
`;

const QuantityDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8a2b06;
  width: 10rem;

  & input {
    padding: 0.3rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0.3rem 0.4rem;
    width: 1.6rem;
    text-align: center;
    font-weight: 600;

    &:disabled {
      background-color: #fff;
    }
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  & button {
    padding: 0.2rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    color: #8a2b06;
    font-weight: 600;
    border: 1px solid #8a2b06;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #8a2b06;
      color: #fff;
    }
  }
`;

const CardModelItem = (props) => {
  const cartContext = useCartContext();
  return (
    <ParentDiv>
      <div>
        <h2>{props.name}</h2>
        <QuantityDiv>
          <p>${props.price}</p>
          <input value={props.quantity} disabled />
        </QuantityDiv>
      </div>
      <ButtonsDiv>
        <button onClick={() => cartContext.decrementOrder(props)}>
          &#8211;
        </button>
        <button onClick={() => cartContext.incrementOrder(props)}>+</button>
      </ButtonsDiv>
    </ParentDiv>
  );
};

export default CardModelItem;
