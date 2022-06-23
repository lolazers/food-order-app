import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <Header />
      <MealOptions />
    </div>
  );
}

export default App;
