import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardContainer, ImageContainer } from '../styled-components/Card';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Anchor } from '../styled-components/Anchor';
import InfoIcon from '@mui/icons-material/Info';
import ModalStudents from './modal';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function StuOrgCard({ org }) {
  const [expanded, setExpanded] = React.useState(false);
  const isMobileScreen = useMediaQuery('(max-width:880px)');

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    function handleScreenResize() {
      const isMobile = window.matchMedia('(max-width:880px)').matches;
      if (!isMobile && expanded) {
        setExpanded(false);
      }
    }
  
    window.addEventListener('resize', handleScreenResize);
  
    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, [expanded]);

  React.useEffect(() => {
    function handleScreenResize() {
      const isMobile = window.matchMedia('(max-width:600px)').matches;
      if (!isMobile && openModal) {
        setOpenModal(false);
      }
    }

    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    }
  }, [openModal])

  const styleText = {
    fontSize: "18px",
    fontWeight: "bold",
    //media query
    '@media (max-width: 880px)': {
      fontSize: "16px",
    },
    '@media (max-width: 600px)': {
      fontSize: "14px",
    }
  }
  
  if (isMobileScreen) {
  return (
    <CardContainer>
      <Card>
        <ImageContainer>
          <CardMedia component="img" style={{height:"auto", objectFit: "fill", width: "auto", maxHeight: "50%"}} image={org.url} alt={org.name + ' logo'} />
        </ImageContainer>
        <Anchor href={org.instagram}>
          <InstagramIcon style={{float: "right", marginTop: "20px", marginRight: "10px"}}/>
        </Anchor>
        <CardContent style={{borderTop: "1px solid black"}}>
          <Typography gutterBottom variant="p" component="div" fontWeight={'bold'}>
            {org.name}
          </Typography>          
            <CardActions style={{display: "inline", float: "right", marginTop: "-40px", marginRight: "20px"}} disableSpacing>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon/>
            </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto"  unmountOnExit>
              <Typography sx={{fontSize: "14px"}} variant="body2" color="text.secondary">
                {org.description}
              </Typography>
            </Collapse>
        </CardContent>
      </Card>
    </CardContainer>
  );
  }
  else{
    return(
      <CardContainer>
      <Card>
        <ImageContainer>
          <CardMedia component="img" style={{height:"auto", objectFit: "fill", width: "auto", maxHeight: "50%"}} image={org.url} alt={org.name + ' logo'} />
        </ImageContainer>
        <Anchor href={org.instagram}>
          <InstagramIcon style={{float: "right", marginTop: "20px", marginRight: "10px"}}/>
        </Anchor>
        <CardContent style={{borderTop: "1px solid black"}}>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} style={styleText}>
            {org.name}
          </Typography>          
            <CardActions style={{display: "inline", float: "right", marginTop: "-47px", marginRight: "10px"}} disableSpacing>
            <IconButton
              aria-label="show more"
              size="large"
              onClick={openModal ? handleCloseModal : handleOpenModal}
            >
              <InfoIcon style={{color: "blue"}}/>
            </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto"  unmountOnExit>
              <Typography sx={{fontSize: "14px"}} variant="body2" color="text.secondary">
                {org.description}
              </Typography>
            </Collapse>
        </CardContent>
      </Card>
      <ModalStudents stuOrg={org} open={openModal} onClose={handleCloseModal} />
    </CardContainer>
    )
  }
}
