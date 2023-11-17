import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({linkImg, name}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={linkFoto}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {nome}
        </Typography>
        </CardContent>
    </Card>
  );
}
