import React, { useState } from 'react';
import logo from './logo.svg';
import { CartProvider } from './Components/CartContext';
import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';
import MealOptions from './Components/MealOptions';
// const ParentContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* background-color: #222222; */
//   /* height: 100vh; */
// `;

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <MealOptions />
      </CartProvider>
    </div>
  );
};

export default App;
