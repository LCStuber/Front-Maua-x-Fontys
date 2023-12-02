import react from 'react';
import ImagemInicial from '../imgs/Imagem1.png';
import {Image} from '../styled-components/Image';
import Grid from '@mui/material/Unstable_Grid2';


export default function Row1() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Image src={ImagemInicial}/>
            </Grid>
        </Grid>
    );
    }

