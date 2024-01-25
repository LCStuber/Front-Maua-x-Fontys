import React from "react";
import { Container, LogoPrint, LoginButton, LogoMS365, Text } from '../styled-components/loginContainer.jsx'
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../authConfig";
import { useNavigate } from 'react-router-dom';


export const SignInButton = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  return (
        <>
            <Container>
                <LogoPrint src="https://d1135f49d6br9m.cloudfront.net/logo-branco-print.png" alt="Logo do Print"></LogoPrint>
                {// Removido-24-01
                /* <LoginButton as="button" onClick={() => instance.loginRedirect(loginRequest)}> */}
                <LoginButton as="button" onClick={() => navigate('/homepage')}>
                    <Text>Acessar</Text>
                    {// Removido-24-01
                    /* <LogoMS365 src="https://d1135f49d6br9m.cloudfront.net/microsoft-365-logo.png" alt="MS365"></LogoMS365> */}
                </LoginButton>
            </Container>
        </>
    )
}