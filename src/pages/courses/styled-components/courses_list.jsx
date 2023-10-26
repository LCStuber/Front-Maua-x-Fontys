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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardBox = styled.div`
  `;

const CardContainer = styled.div`
  position: relative;
  
`;


export {Header, Button, Container, CardContainer, CardBox}