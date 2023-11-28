import React, {useState, useEffect} from 'react';
import api from '../../api/axiosConfig';
import {Header} from '../../styled-components/Header';
import {Description} from './styled-components/Description';
import Card from './components/Card'
import Grid from '@mui/material/Unstable_Grid2';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


export default function CollegeInfo() {
  const [collegeInfo, setCollegeInfo] = React.useState([]);

  const getCollegeInfo = async () => {
    try {
      const response = await api.get('/api/v1/college');
      console.log(response.data);
      setCollegeInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCollegeInfo();
  }, [])

  return(
    <Grid container
    spacing={0}
    justifyContent="center"
    style={{margin: "0"}}>
        <Grid xs={12}>
            <Header>Sobre a Mauá:</Header>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
            <Card name={collegeInfo.rector} linkImg={collegeInfo.rectorImg}/>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} sx={{marginBottom: "64px"}}>
            <Card name={collegeInfo.viceRector} linkImg={collegeInfo.viceRectorImg}/>
        </Grid>
        <Grid xs={12}>
            <Description>
                {collegeInfo.description}
                
            </Description>
        </Grid>
    </Grid>
  );
}