import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '../styled-components/courses_list';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#001C35',
          color: '#f6f6f6'
        },
      },
    },
  },
});

export default function CoursesCard({ course }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345, position: 'relative'}} >
        <CardHeader title={course.name} />        
        <CardMedia style={{position: "relative"}} component="img" height="194" image={course.image} alt={course.name + " imagem"} />
          <Button>
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <AddIcon />
            </IconButton>
          </Button>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Coordinator: {course.coordinator}</Typography>
            <Typography>{course.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}
