import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import MapIcon from '@mui/icons-material/Map';
import LogoutIcon from '@mui/icons-material/Logout';
import SchoolIcon from '@mui/icons-material/School';
import Link from '@mui/material/Link';
import { Announcement } from '@mui/icons-material';

export default function Drawer({ anchor, open, onClose, onOpen }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {[['My activities', <LocalActivityIcon />, '/activities'],
        ['Interactive Map', <MapIcon />, '/interactive-map'],
        ["Mauá's Location", <SchoolIcon />, '/maua-location'],
        ["Announcements", <Announcement/>, '/stuannouncement'],
        ['Logout', <LogoutIcon />, '/']].map((button, index) => (
          <Link href={button[2]}>
            <ListItem key={button[0]} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {button[1]}
                </ListItemIcon>
                <ListItemText primary={button[0]} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

    </Box>
  );

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      {list()}
    </SwipeableDrawer>
  );
}
