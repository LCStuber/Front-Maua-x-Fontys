import styled from "styled-components";

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


export { Button, Container, CardContainer, CardBox}