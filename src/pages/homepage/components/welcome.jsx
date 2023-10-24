import axios from "axios";
import React from 'react';
import {Welcome, DateContainer, Image} from '../styled-components/welcome'
import DefaultImage from '../imgs/default-image.jpg';

export default function WelcomeComponent(){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return(
        <>        
        <Welcome>
            <p>Welcome User!</p>
            <DateContainer>{day}/{month}</DateContainer>  
        </Welcome>
        <Image src={DefaultImage} alt="Default Image"></Image>  
        </>
    )
}