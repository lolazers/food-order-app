import React from 'react';
import styled from 'styled-components';

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
  border-radius: 5px;
  padding: 1rem;
`;

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.9rem;
`;

const CartModal = (props) => {
  return (
    <Background>
      <Modal>
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
