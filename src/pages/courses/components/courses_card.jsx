import React, {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Button, CardContainer } from '../styled-components/courses_list';
import ModalCourse from './modal';

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
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        <Card>
          <CardHeader title={course.name} />        
          <CardMedia style={{position: "relative"}} component="img" height="194" image={course.image} alt={course.name + " imagem"} />
            <Button>
              <IconButton
                aria-label="show more"
                size="large"
                onClick={open ? handleClose : handleOpen}
              >
                <AddIcon />
              </IconButton>
            </Button>
        </Card>
      </CardContainer>
      <ModalCourse course={course} open={open} onClose={handleClose} />
    </ThemeProvider>
  );
}