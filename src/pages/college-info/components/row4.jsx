import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {ImageInclined} from '../styled-components/Image';
import {Container, Description2, Header2} from '../styled-components/Description';

export default function Row4() {
    return (
        <Grid container style={{ backgroundColor: "#ffffff"}} >
                <Grid md={6}  order={{ xs: 2, sm: 3 }}>
                    <Container>
                        <Header2 style={{color: "black", fontFamily: "Sansita-ExtraBold", fontWeight: "bold"}}>Explorando Paixões e Soluções</Header2>
                        <Description2 style={{color: "black"}}>O Instituto Mauá de Tecnologia estimula um ambiente colaborativo e inclusivo, convidando os estudantes a explorarem suas paixões e a desenvolverem soluções inovadoras para os desafios atuais.</Description2>
                    </Container>
                </Grid>
                <Grid md={6} order={{ xs: 3, sm: 2 }}>
                    <ImageInclined src="https://d1135f49d6br9m.cloudfront.net/info3.png"/>
                </Grid>
        </Grid>
    );
}