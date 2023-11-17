import React, {useState} from 'react';
import api from '../../api/axiosConfig';
import {Header} from '../../styled-components/Header';
import {Description} from './styled-components/Description';
import Card from './components/Card'
import Grid from '@mui/material/Unstable_Grid2';


export default function CollegeInfo() {
  const [collegeInfo, setCollegeInfo] = React.useState([]);

  const getColleggeInfo = async () => {
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
    <Grid container spacing={3} style={{margin: "0"}}>
        <Grid xs={12} sm={6} md={4} lg={3}>
            <Header>Sobre o IMT:</Header>
            <Description>
                {collegeInfo.description}
            </Description>
            <Card name={collegeInfo.rector} linkImg={collegeInfo.rectorImg}/>
            <Card name={collegeInfo.viceRector} linkImg={collegeInfo.viceRectorImg}/>
        </Grid>
    </Grid>
  );
}