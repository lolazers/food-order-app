import React from 'react';
import styled from 'styled-components';

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0;
`;

const Description = styled.p`
  font-style: italic;
`;

const Price = styled.p`
  font-weight: 600;
  color: orange;
`;

const Amount = styled.p`
  font-weight: 800;
`;

const AmountDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & div:first-child {
    display: flex;
    align-items: center;
    height: auto;
    gap: 1rem;

    & input {
      height: 1rem;
      width: 2.5rem;
      padding: 0.2rem 0.5rem;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  }
  & button {
    width: 6rem;
    border-radius: 14px;
    outline: none;
    border: none;
    padding: 0.4rem 1rem;
    background-color: #8a2b06;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
  }
`;

const MealItem = (props) => {
  return (
    <ParentDiv>
      <div>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
        <Price>{props.price}</Price>
      </div>
      <AmountDiv>
        <div>
          <Amount>Amount</Amount>
          <input type="number" />
        </div>
        <button type="button">+ Add</button>
      </AmountDiv>
    </ParentDiv>
  );
};

export default MealItem;
