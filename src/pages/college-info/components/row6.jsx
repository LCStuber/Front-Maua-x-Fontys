import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {Image} from '../styled-components/Image'
import {Container, Description2, Header2} from '../styled-components/Description';

export default function Row6() {
    return (
        <Grid container style={{ backgroundColor: "#ffffff"}} >
                <Grid md={7} order={{ xs: 2, sm: 3 }}>
                    <Image src="https://d1135f49d6br9m.cloudfront.net/info5.png"/>
                </Grid>
                <Grid md={5}>
                    <Container>
                        <Header2 style={{color: "black", fontFamily: "Sansita-ExtraBold", fontWeight: "bold"}}>Eventos no Instituto Mauá</Header2>
                        <Description2 style={{color: "black"}}>A instituição promove uma série de eventos, palestras e workshops voltados para inspirar e capacitar os estudantes, fortalecendo seu papel e impacto no universo da inovação e da ciência.</Description2>
                    </Container>
                </Grid>
        </Grid>
    );
}