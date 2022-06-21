import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: absolute;
  top: 15rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-color: #393939;
  color: rgba(255, 255, 255, 0.7);
  max-width: 41rem;
  padding: 0.4rem 1rem;
  border-radius: 10px;

  & h1 {
    margin-top: 0;
    color: rgba(255, 255, 255, 0.9);
  }
`;

function HeaderMessage() {
  return (
    <Div>
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Div>
  );
}

export default HeaderMessage;
