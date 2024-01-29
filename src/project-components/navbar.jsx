import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './drawer';
import Image from '../styled-components/Navbar';
import { Button } from '@mui/material';


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
          <a href="/homepage">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Image src="https://d1135f49d6br9m.cloudfront.net/logo-branco-print.png" alt="Logo Print Mauá"/>
            </Typography>
          </a>
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
