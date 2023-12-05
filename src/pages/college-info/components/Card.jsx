import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({linkImg, name, cargo}) {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        alt={"Imagem do" + name + "da Mauá"}
        height="300"
        image={linkImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {cargo}
        </Typography>
        </CardContent>
    </Card>
  );
}
