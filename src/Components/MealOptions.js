import React, { useContext } from 'react';
import styled from 'styled-components';
import MealItem from './MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const Div = styled.div`
  background-color: white;
  max-width: 65rem;
  margin: 4rem auto;
  padding: 0.5rem 1.2rem 2rem 1.2rem;
  border-radius: 10px;
`;

const MealOptions = () => {
  return (
    <Div>
      {DUMMY_MEALS.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </Div>
  );
};

export default MealOptions;
