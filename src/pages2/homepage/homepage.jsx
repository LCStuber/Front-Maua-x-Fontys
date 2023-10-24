import React, {useState} from 'react';
import Navbar from '../../project-components/navbar';
import WelcomeComponent from './components/welcome';
import NavigationComponent from './components/navigation';

export default function HomePage(){
  
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => {
      setIsDrawerOpen(open);
    };

    return(
        <>        
        <Navbar openDrawer={toggleDrawer}></Navbar>
        <WelcomeComponent></WelcomeComponent>
        <NavigationComponent></NavigationComponent>
        </>
    )
}