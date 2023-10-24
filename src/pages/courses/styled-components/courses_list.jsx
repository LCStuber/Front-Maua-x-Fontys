import styled from "styled-components";

const Header = styled.h1`
  font-size: 200%;
  color: #f6f6f6;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  font-weight: normal;
`;

const Button = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;
  border-radius: 30px;
  width: 70px;
  height: 50px;
  background-color: #CCDAE7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  @media (max-width: 768px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  
  }
  @media (max-width: 879px){
    display: flex;
    flex-direction: column;

  }
`;

const CardContainer = styled.div`
  position: relative;
  @media (max-width: 768px){
    width: 90%;
    margin: auto;
    margin-bottom: 40px;
  }
  @media (max-width: 880px){
    width: 60%;
    margin-bottom: 40px;
  }
  @media (min-width: 881px){
    width: 20%;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
  }
`;


export {Header, Button, Container, CardContainer}