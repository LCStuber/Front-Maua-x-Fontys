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
import DownloadIcon from '@mui/icons-material/Download';
import Link from '@mui/material/Link';
import { Announcement } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Anchor from '@mui/material/Link';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: '#001C35',
  color: '#f6f6f6',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  //media query
  '@media (min-width: 880px)': {
    width: "400px",
  },
};


export default function Drawer({ anchor, open, onClose, onOpen }) {
  const [opendrawer, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    <>
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {[// Removido-24-01
          //['My activities', <LocalActivityIcon />, () => {navigate('/activities');}],
        ["Localização da Mauá", <SchoolIcon />, () => {navigate('/maua-location');}],
        // ["Announcements", <Announcement/>, () => {navigate('/stuannouncement');}],
        // ["Announcements", <Announcement/>, () => {navigate('/announcement');}],
        ['Sair', <LogoutIcon />, () => {navigate('/');}],
        ["Tutorial Instalação", <DownloadIcon />, () => {setOpen(true)}]
        // Removido-24-01
        // ['Sair', <LogoutIcon />, () => {
        //   instance.logoutPopup({
        //     postLogoutRedirectUri: "/",
        //     mainWindowRedirectUri: "/",
        //   });
        //   navigate('/');
        // }]
        ].map((button, index) => (
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

    <Modal
    open={opendrawer}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              Aqui está um breve tutorial de como instalar o aplicativo:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              iOS:
          <Anchor style={{textDecoration: "underline", paddingLeft:  "5px"}} href="https://docs.google.com/document/d/1rvwz_2WdzmTtW5k51GzPtLeqFFsauaCOx7baIOY89oU">Clique aqui</Anchor>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Android: 
          <Anchor style={{textDecoration: "underline", paddingLeft:  "5px"}} href="https://docs.google.com/document/d/1Vor5BQxNYSdQ5tNoSSfCawFidKCzexdXuJi4DBuMQlc">Clique aqui</Anchor>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Desktop: 
          <Anchor style={{textDecoration: "underline", paddingLeft:  "5px"}} href="https://docs.google.com/document/d/1MzFrvmsD6RosZhZwkPsm76ba0Xre-tgfrnmxEMuGsLc">Clique aqui</Anchor>
          </Typography>
      </Box>
    </Modal>
    </>
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
