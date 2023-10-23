import axios from "axios";
import React, {useState} from 'react';
import Navbar from '../../project-components/navbar';

export default function HomePage(){
  
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => {
      setIsDrawerOpen(open);
    };

    return(
        <>        
        <Navbar openDrawer={toggleDrawer}></Navbar>
        </>
    )
}