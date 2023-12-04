import React, {useState, useEffect} from 'react';
import api from '../../../api/axiosConfig';
import Grid from '@mui/material/Unstable_Grid2';
import Card from './Card';
import {Header} from '../styled-components/Description';


export default function Row7() {
    const [universityInfo, setInfo] = useState([{
        id: '',
        rector: '',
        rectorImage: '',
        viceRector: '',
        viceRectorImage: ''
    }]);

    const getInfo = async () => {
      try {
        const response = await api.get('/api/v1/universityinfo');
        setInfo(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
        getInfo();
    }, [])


    return (
        <>
        <div>
            <Grid container  textAlign={"center"}>
                <Grid item md={12}>
                    <Header style={{marginTop: "24px"}}>Reitoria</Header>
                </Grid>
                <Grid  item xs={12} md={6}  display={"flex"} alignItems={"center"} justifyContent={"center"}  marginTop={"24px"}>
                    <Card linkImg={universityInfo.rectorImage} name={universityInfo.rector} cargo="Reitor"/>
                </Grid>
                <Grid item xs={12} md={6} display={"flex"} alignItems={"center"} justifyContent={"center"}  marginTop={"24px"}>
                    <Card linkImg={universityInfo.viceRectorImage} name={universityInfo.viceRector} cargo="Vice Reitor" />
                </Grid>
            </Grid>
        </div>
        </>
    );
}