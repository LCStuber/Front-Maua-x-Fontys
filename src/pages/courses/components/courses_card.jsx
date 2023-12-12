import React, {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Person2Icon from '@mui/icons-material/Person2';
import { Button, CardContainer } from '../styled-components/courses_list';
import ModalCourse from './modal';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoIcon from '@mui/icons-material/Info';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#001C35',
          color: '#f6f6f6',
          maxWidth: '100%',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: '115%',
        },
        },
      },
    }
  });

export default function CoursesCard({course}) {
  const [openDescriptionModal, setOpenDescriptionModal] = useState(false);
  const [openCoordinatorModal, setOpenCoordinatorModal] = useState(false);

  const handleOpenDescriptionModal = () => {
    setOpenDescriptionModal(true);
  };

  const handleCloseDescriptionModal = () => {
    setOpenDescriptionModal(false);
  };

  const handleOpenCoordinatorModal = () => {
    setOpenCoordinatorModal(true);
  };

  const handleCloseCoordinatorModal = () => {
    setOpenCoordinatorModal(false);
  };


  if (course.name === "Engenharia – Ciclo Básico"){
    return (
      <ThemeProvider theme={theme}>
        <CardContainer>
          <Card>
            <IconButton
              aria-label="show more"
              size="large"
              onClick={openDescriptionModal ? handleCloseDescriptionModal : handleOpenDescriptionModal}
              style={{position: "absolute", top: "0", right: "0", color: "white", marginTop: "5px", marginRight: "2px"}}
            >
              <InfoIcon/>
            </IconButton>
            <CardHeader title={course.name}/>        
            <CardMedia style={{position: "relative"}} component="img" height="194" image={course.displayImage} alt={course.name + " imagem"} />
              <Button>
                <IconButton
                  aria-label="show more"
                  size="large"
                  onClick={openCoordinatorModal ? handleCloseCoordinatorModal : handleOpenCoordinatorModal}
                >
                  <Person2Icon />
                </IconButton>
              </Button>
          </Card>
        </CardContainer>
        <ModalCourse course={course} open={openDescriptionModal} onClose={handleCloseDescriptionModal} type={"description"} />
        <ModalCourse course={course} open={openCoordinatorModal} onClose={handleCloseCoordinatorModal} type={"coordinator"} />
      </ThemeProvider>
    )
  }
  else{
    return (
      <ThemeProvider theme={theme}>
        <CardContainer>
          <Card>
          <a href={course.url}>
            <LaunchIcon style={{float: "right", marginTop: "17.5px", marginRight: "15px"}}/>  
          </a>
            <CardHeader title={course.name}/>        
            <CardMedia style={{position: "relative"}} component="img" height="194" image={course.displayImage} alt={course.name + " imagem"} />
              <Button>
                <IconButton
                  aria-label="show more"
                  size="large"
                  onClick={openCoordinatorModal ? handleCloseCoordinatorModal : handleOpenCoordinatorModal}
                >
                  <Person2Icon />
                </IconButton>
              </Button>
          </Card>
        </CardContainer>
        <ModalCourse course={course} open={openCoordinatorModal} onClose={handleCloseCoordinatorModal} type={"coordinator"} />
      </ThemeProvider>
    );
  }
}
