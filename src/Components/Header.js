import React from 'react';
import styled from 'styled-components';
import banner from '../Images/meals.jpg';
import Cart from './Cart';
import HeaderMessage from './HeaderMessage';

const HeaderDiv = styled.div`
  position: fixed;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #8a2b06;
  color: white;
  font-weight: 700;
  z-index: 10;
  padding: 0 10%;
  top: 0;
  left: 0;
`;

const ImgDiv = styled.div`
  height: 25rem;
  overflow: hidden;
  & img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`;

const Header = () => {
  return (
    <React.Fragment>
      <HeaderDiv>
        <h1>ReactMeals</h1>
        <Cart />
      </HeaderDiv>
      <ImgDiv>
        <img src={banner} />
      </ImgDiv>
      <HeaderMessage />
    </React.Fragment>
  );
};

export default Header;
