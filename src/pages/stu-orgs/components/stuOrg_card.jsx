import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardContainer } from '../styled-components/Card';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import InstagramIcon from '@mui/icons-material/Instagram';

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
  const isMobileScreen = useMediaQuery('(max-width:600px)');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardContainer>
      <Card>
        <CardMedia component="img" sx={{height: "350px", objectFit: "fill"}} image={org.url} alt={org.name + ' logo'} />
        <a href={org.instagram}>
          <InstagramIcon style={{float: "right", marginTop: "10px", marginRight: "10px"}}/>
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'}>
            {org.name}
          </Typography>
          {isMobileScreen ? (
            <>            
            <CardActions style={{display: "inline", float: "right", marginTop: "-52px"}} disableSpacing>
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
              <Typography sx={{fontSize: "10px"}} variant="body2" color="text.secondary">
                {org.description}
              </Typography>
            </Collapse>
            </>
          ) : (
            <Typography sx={{fontSize: "12px"}} variant="body2" color="text.secondary">
              {org.description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </CardContainer>
  );
}
