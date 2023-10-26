import axios from "axios";
import React from "react";
import {Activities, Header,Card, CardText, Anchor, Group} from '../styled-components/navigation'
import SchoolIcon from '@mui/icons-material/School';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


export default function NavigationComponent() {
    return(
        <>
        <Activities>See all activities</Activities>
        <Header>College Information: </Header>
        <Group>
            <Anchor href="#">
                <Card>
                    <CardText>
                        College Information
                    </CardText>
                    <SchoolIcon sx={{ fontSize: 72 }} style={{marginRight: "20px"}} ></SchoolIcon>
                </Card>
            </Anchor>
            <Anchor href="/courses">
                <Card>
                    <CollectionsBookmarkIcon sx={{ fontSize: 72 }} style={{marginLeft: "35px"}} ></CollectionsBookmarkIcon>
                    <CardText style={{marginLeft: "60px"}}>
                        College Courses
                    </CardText>
                </Card>
            </Anchor>
            <Anchor href="#">
                <Card>
                    <CardText>
                        Students Organizations
                    </CardText>
                    <PeopleAltIcon sx={{ fontSize: 72 }} style={{marginRight: "20px"}} ></PeopleAltIcon>
                </Card>
            </Anchor>
        </Group>
        </>
    )
}