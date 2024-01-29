import styled from 'styled-components';

const MainContainer = styled.div`
  @media (orientation: landscape) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  background-color: #014785;
  font-family: Arial, sans-serif;
  text-align: center;
  color: #FFFFFF;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  @media screen and (max-aspect-ratio: 1/1) and (orientation: portrait) {
    background-color: #FFFFFF;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  @media (orientation: landscape) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export { MainContainer as Body, Container };