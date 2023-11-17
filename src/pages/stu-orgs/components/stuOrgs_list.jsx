import React, {useState, useEffect} from 'react';
import api from '../../../api/axiosConfig';
import {Header} from '../../../styled-components/Header';
import Grid from '@mui/material/Unstable_Grid2';
import StuOrgCard from './stuOrg_card';


export default function StuOrgsList(){

    const [stuOrgs, setStuOrgs] = useState([]);

    const getStuOrgs = async () => {
      try {
        const response = await api.get('/api/v1/organizations');
        console.log(response.data);
        setStuOrgs(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getStuOrgs();
    }, [])

    return(
        <>
        <Header>Entidades:</Header>
            <Grid container spacing={3} style={{margin: "0"}}>
        {stuOrgs.map((org) => (
            <Grid xs={12} sm={6} md={4} lg={3}>
                <StuOrgCard org={org} key={org.id}/>
            </Grid>
        ))}
            </Grid>
        </>
    );
}