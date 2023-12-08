import styled from 'styled-components';

const CardContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 90%;
    margin: 0 auto;
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

export {CardContainer, ImageContainer,Button}