import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: #222222; */
  /* height: 100vh; */
`;

function App() {
  return (
    <ParentContainer className="App">
      <Header />
    </ParentContainer>
  );
}

export default App;
