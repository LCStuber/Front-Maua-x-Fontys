import React from 'react';
import {Welcome, DateContainer, Image} from '../styled-components/welcome'
import { useMsal } from '@azure/msal-react';

export default function WelcomeComponent(){
    const { accounts } = useMsal();
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return(
        <>        
        <Welcome>
            <p>Bem vindo, {accounts[0].name.charAt(0).toUpperCase() + accounts[0].name.substr(1).toLowerCase().split(" ")[0]}!</p>
            <DateContainer>{day}/{month}</DateContainer>  
        </Welcome>
        <Image src="https://d1135f49d6br9m.cloudfront.net/imagem_homepage.jpg" alt="Default Image"></Image>  
        </>
    )
}