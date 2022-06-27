import React from 'react';
import styled from 'styled-components';
import CardModelItem from './CardModelItem';

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
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
  return (
    <Background>
      <Modal>
        <CardModelItem />
        <TotalDiv>
          <p>Total Amount</p>
          <p>$3333</p>
        </TotalDiv>
        <ModalButtons>
          <button type="button">Close</button>
          <button type="button">Order</button>
        </ModalButtons>
      </Modal>
    </Background>
  );
};

export default CartModal;
