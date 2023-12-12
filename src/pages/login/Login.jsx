import React, { useEffect } from 'react';
import { Body, Container } from './styled-components/Body.jsx';
import { SignInButton } from './components/loginContainer';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

import Cloud from './components/clouds';

function Login() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  const handleSignIn = () => {
    instance.loginRedirect();
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/homepage');
    }
  }, [isAuthenticated, navigate]);

  return (

    <Body>
      <Container>
        <SignInButton onClick={handleSignIn}></SignInButton>
      </Container>
      <Cloud></Cloud>
    </Body>
  )
}

export default Login