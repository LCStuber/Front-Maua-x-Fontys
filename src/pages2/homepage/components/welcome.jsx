import axios from "axios";
import React from 'react';
import {Welcome, DateContainer, Image} from '../styled-components/welcome'
import DefaultImage from '../imgs/default-image.jpg';

export default function WelcomeComponent(){
    return(
        <>        
        <Welcome>
            <p>Welcome User!</p>
            <DateContainer>06/02</DateContainer>  
        </Welcome>
        <Image src={DefaultImage} alt="Default Image"></Image>  
        </>
    )
}