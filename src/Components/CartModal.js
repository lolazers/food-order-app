import React, { useContext } from 'react';
import styled from 'styled-components';
import CardModelItem from './CardModelItem';
import { useCartContext } from './CartContext';

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* z-index: 100; */
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  width: 40rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  padding: 1rem;
  /* z-index: 10; */
`;

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.9rem;

  & button {
    padding: 0.5rem 1.4rem;
    border-radius: 1rem;
    background-color: #fff;
    border: 1px solid #8a2b06;
    cursor: pointer;
  }

  & button:first-child {
    color: #8a2b06;
  }

  & button:nth-child(2) {
    background-color: #8a2b06;
    color: #fff;
  }
`;

const CartModal = (props) => {
  const cartContext = useCartContext();

  return (
    <Background>
      <Modal>
        {props.items.map((item) => {
          return (
            <CardModelItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}

        <TotalDiv>
          <p>Total Amount</p>
          <p>${props.totalAmount}</p>
        </TotalDiv>
        <ModalButtons>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              cartContext.closeModal();
            }}
          >
            Close
          </button>
          <button type="button" onClick={cartContext.order}>
            Order
          </button>
        </ModalButtons>
      </Modal>
    </Background>
  );
};

export default CartModal;
