import React from 'react';
import { Link } from 'react-router-dom';
import { Body, Container } from './styled-components/Body.jsx';
import LoginContainer from './components/loginContainer';
import Cloud from './components/clouds';

function Login() {

  return (
    <>
      <Body>
        <Cloud></Cloud>
        <Container>
          <LoginContainer></LoginContainer>
        </Container>
      </Body>
    </>
  )
}

export default Login