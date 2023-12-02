import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {Image} from '../styled-components/Image'
import {Container, Header, Description} from '../styled-components/Description';
import Imagem2 from '../imgs/Imagem2.png';


export default function Row3() {
    return (
        <Grid container >
            <Grid item md={7} order={{ xs: 2, sm: 3 }}>
                <Container>
                    <Header>Cursos e Oportunidades:</Header>
                    <Description>O instituto oferece uma variedade de cursos e oportunidades para aqueles que estão iniciando sua jornada no mundo da tecnologia. Além de uma infraestrutura moderna e laboratórios equipados com tecnologia de ponta.</Description>
                </Container>
            </Grid>
            <Grid item md={5} order={{ xs: 3, sm: 2 }}>
                <Image src={Imagem2}/>
            </Grid>
        </Grid>
    );
}