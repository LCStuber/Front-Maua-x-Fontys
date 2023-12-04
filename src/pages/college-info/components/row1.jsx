import React from 'react';
import {Image} from '../styled-components/Image';
import Grid from '@mui/material/Unstable_Grid2';


export default function Row1() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Image src="https://d1135f49d6br9m.cloudfront.net/info1.png"/>
            </Grid>
        </Grid>
    );
    }

