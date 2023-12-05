import Grid from '@mui/material/Unstable_Grid2';
import {Container, Header2, Description2} from '../styled-components/Description';
import SVG from '../imgs/koifishu.svg';


export default function Row2() {
    return (
        <Grid container style={{ backgroundColor: "#ffffff"}}>
                <Grid md={6} order={{ xs: 2, sm: 3 }}>
                    <img src={SVG} style={{margin: "auto"}} alt="Peixes Azul e Branco" />
                </Grid>
                <Grid md={6}>
                    <Container>
                        <Header2>O Instituto Mauá: Onde a Inovação Ganha Vida?</Header2>
                        <Description2>O Instituto Mauá de Tecnologia é um lugar acolhedor e dinâmico, especialmente dedicado aos novos estudantes. Com mais de 60 anos de tradição em excelência acadêmica e inovação.</Description2>
                    </Container>
                </Grid>
        </Grid>
    );
}

