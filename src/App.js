import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";
import PieChart from "./components/PieChart";
// import OverViewComponent from "./modules/home/OverViewComponent";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
  
`;

const Header = styled.div`
  border-radius:20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-weight: bold;
  font-size:30px;
  background:-webkit-linear-gradient(blue,red);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
`;
const App = () => {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
      
      
    </Container>
  );
};

export default App;
