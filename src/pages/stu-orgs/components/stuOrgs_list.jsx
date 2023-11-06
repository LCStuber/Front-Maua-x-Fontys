import React, {useState} from 'react';
import axios from 'axios';
import {Header} from '../../../styled-components/Header';
import DevCommunityMauaImage from '../imgs/DevCommunity.png';
import Grid from '@mui/material/Unstable_Grid2';
import StuOrgCard from './stuOrg_card';


export default function StuOrgsList(){

    const [stuOrgs, setStuOrgs] = React.useState([]);

    const stuOrgs_list = [
        {
            id: 1,
            name: "Dev. Community Mauá",
            description: "This is Dev. Community Mauá.",
            image: DevCommunityMauaImage
        },
        {
            id: 2,
            name: "Mauá Esports",
            description: "This is Mauá Esports.",
            image: DevCommunityMauaImage
        },
        {
            id: 3,
            name: "Mauá Jr.",
            description: "This is Maua Jr.",
            image: DevCommunityMauaImage
        },
        {
            id: 4,
            name: "AeroMauá",
            description: "This is AeroMauá.",
            image: DevCommunityMauaImage
        },
        {
            id: 5,
            name: "Enactus Mauá",
            description: "This is Enactus Mauá.",
            image: DevCommunityMauaImage
        },
        //Later we'll connect this with DynamoDB
    ];

    React.useEffect(() => {
        setStuOrgs(stuOrgs_list);
    }, []);

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