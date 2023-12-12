import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {Image} from '../styled-components/Image'
import {Container, Header, Description} from '../styled-components/Description';


export default function Row3() {
    return (
        <Grid container >
            <Grid md={7} order={{ xs: 2, sm: 3 }}>
                <Container>
                    <Header>Cursos e Oportunidades:</Header>
                    <Description>O instituto oferece uma variedade de cursos e oportunidades para aqueles que estão iniciando sua jornada no mundo da tecnologia. Além de uma infraestrutura moderna e laboratórios equipados com tecnologia de ponta.</Description>
                </Container>
            </Grid>
            <Grid md={5} order={{ xs: 3, sm: 2 }}>
                <Image src="https://d1135f49d6br9m.cloudfront.net/info2.png"/>
            </Grid>
        </Grid>
    );
}