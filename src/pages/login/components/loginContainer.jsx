import React from "react";
import { Container, LogoPrint, LoginButton, LogoMS365, Text } from '../styled-components/loginContainer.jsx'
import Logo from '../imgs/logo-branco-print.png'
import MS365Logo from '../imgs/microsoft-365-logo.png'
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../authConfig";


export const SignInButton = () => {
  const { instance } = useMsal();

  return (
        <>
            <Container>
                <LogoPrint src={Logo} alt="Logo do Print"></LogoPrint>
                <LoginButton as="button" onClick={() => instance.loginRedirect(loginRequest)}>
                    <Text>Login</Text>
                    <LogoMS365 src={MS365Logo} alt="MS365"></LogoMS365>
                </LoginButton>
            </Container>
        </>
    )
}