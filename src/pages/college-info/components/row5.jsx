import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {ImageInclined} from '../styled-components/Image'
import {Container, Description, Header} from '../styled-components/Description';

export default function Row5() {
    return (
        <Grid container>
            <Grid md={7} order={{ xs: 2, sm: 3 }} >
                <Container>
                    <Header >Além do Convencional</Header>
                    <Description>Para os novos alunos, o Instituto Mauá de Tecnologia é mais do que uma instituição de ensino: é um espaço que ultrapassa os limites da sala de aula. Através de programas de mentoria, grupos de estudo e projetos interdisciplinares, os estudantes têm a oportunidade de adquirir habilidades práticas, trabalhar em equipes diversificadas e expandir seus horizontes para se tornarem líderes no campo da tecnologia.</Description>
                </Container>
            </Grid>
            <Grid md={5} order={{ xs: 3, sm: 2 }}>
                <ImageInclined src="https://d1135f49d6br9m.cloudfront.net/info4.png"/>
            </Grid>
        </Grid>
    );
}