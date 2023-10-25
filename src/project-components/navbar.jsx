import * as React from 'react';
import axios from "axios";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './drawer';
import Image from '../styled-components/Navbar';
import Logo from '../imgs/logo-branco-print.png'


export default function Navbar({openDrawer}){
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  return (
    <>    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "#014785" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              toggleDrawer(true);
              openDrawer(true);
            }}
              
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Image src={Logo} alt="Logo Print Mauá"/>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      />
    </>
  );
}
