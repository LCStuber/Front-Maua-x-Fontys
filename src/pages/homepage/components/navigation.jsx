import axios from "axios";
import React from "react";
import {Activities, Header,Card, CardText, Anchor, Group,} from '../styled-components/navigation'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DownloadIcon from '@mui/icons-material/Download';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from "@mui/material";
import { BorderBottom, Padding } from "@mui/icons-material";
import { text } from "@fortawesome/fontawesome-svg-core";

export default function NavigationComponent() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
        <Grid container>
            {/* // Removido-24-01 */}
            <Grid xs={12}>          
                <Anchor href="#">
                    <Activities>Atividades (Em Desenvolvimento)</Activities>
                </Anchor>
                <Header style={{marginTop: "12px", marginBottom: "12px"}}>Informações Gerais: </Header>
            </Grid>
        </Grid>
        <Grid container>
            <Grid xs={12} md={4}>
                <Anchor href="/college-info">
                    <Card>
                        <CardText style={{fontSize: "120%"}}>
                            Sobre a Mauá
                        </CardText>
                        <SchoolIcon sx={{ fontSize: 72 }} style={{marginRight: "20px"}} ></SchoolIcon>
                    </Card>
                </Anchor>
            </Grid>
            <Grid xs={12} md={4}>
                <Anchor href="/courses">
                    <Card>
                        <CollectionsBookmarkIcon sx={{ fontSize: 72 }} style={{marginLeft: "20px"}} ></CollectionsBookmarkIcon>
                        <CardText style={{marginRight: "60px"}}>
                            Cursos
                        </CardText>
                    </Card>
                </Anchor>
            </Grid>
            <Grid xs={12} md={4}>
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