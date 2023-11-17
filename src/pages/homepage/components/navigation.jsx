import axios from "axios";
import React from "react";
import {Activities, Header,Card, CardText, Anchor, Group} from '../styled-components/navigation'
import SchoolIcon from '@mui/icons-material/School';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Grid from '@mui/material/Unstable_Grid2';


export default function NavigationComponent() {
    return(
        <>
        <Grid container>
            <Grid item xs={12}>            
                <Anchor href="/activities">
                    <Activities>See all activities</Activities>
                </Anchor>
                <Header style={{marginTop: "12px", marginBottom: "12px"}}>College Information: </Header>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} md={4}>
                <Anchor href="#">
                    <Card>
                        <CardText style={{fontSize: "120%"}}>
                            Sobre a Mauá
                        </CardText>
                        <SchoolIcon sx={{ fontSize: 72 }} style={{marginRight: "20px"}} ></SchoolIcon>
                    </Card>
                </Anchor>
            </Grid>
            <Grid item xs={12} md={4}>
                <Anchor href="/courses">
                    <Card>
                        <CollectionsBookmarkIcon sx={{ fontSize: 72 }} style={{marginLeft: "20px"}} ></CollectionsBookmarkIcon>
                        <CardText style={{marginRight: "60px"}}>
                            Cursos
                        </CardText>
                    </Card>
                </Anchor>
            </Grid>
            <Grid item xs={12} md={4}>
                <Anchor href="/stuorgs">
                    <Card>
                        <CardText style={{fontSize: "110%"}}>
                            Entidades Estudantis
                        </CardText>
                        <PeopleAltIcon sx={{ fontSize: 72 }} style={{marginRight: "20px"}} ></PeopleAltIcon>
                    </Card>
                </Anchor>
            </Grid>
        </Grid>
        </>
    )
}