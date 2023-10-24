import React, {useState} from 'react'
import axios from 'axios'
import Navbar from '../../project-components/navbar.jsx'
import CoursesList from './components/courses_list.jsx'

export default function Courses(){

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => {
      setIsDrawerOpen(open);
    };

    return(
        <>
        <Navbar openDrawer={toggleDrawer}/>
        <CoursesList/>
        </>
    )
}