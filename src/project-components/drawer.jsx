import * as React from 'react';
import { useMsal } from "@azure/msal-react";
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
import { useNavigate } from 'react-router-dom';

export default function Drawer({ anchor, open, onClose, onOpen }) {
  const { instance } = useMsal();
  const navigate = useNavigate();
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
        {[['My activities', <LocalActivityIcon />, () => {navigate('/activities');}],
        ['Interactive Map', <MapIcon />, () => {navigate('/interactive-map');}],
        ["Mauá's Location", <SchoolIcon />, () => {navigate('/maua-location');}],
        ["Announcements", <Announcement/>, () => {navigate('/stuannouncement');}],
        ["Announcements", <Announcement/>, () => {navigate('/announcement');}],
        ['Logout', <LogoutIcon />, () => {
          instance.logoutPopup({
            postLogoutRedirectUri: "/",
            mainWindowRedirectUri: "/",
          });
          navigate('/');
        }]].map((button, index) => (
          <ListItem key={button[0]} disablePadding>
            <ListItemButton onClick={typeof button[2] === 'function' ? button[2] : () => {}}>
              <ListItemIcon>
                {button[1]}
              </ListItemIcon>
              <ListItemText primary={button[0]} />
            </ListItemButton>
          </ListItem>
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
