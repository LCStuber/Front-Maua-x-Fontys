import React, {useState, useEffect} from 'react';
import api from '../../../api/axiosConfig';
import {Header} from '../../../styled-components/Header';
import CoursesCard from './courses_card';
import ComputerScienceImage from '../imgs/csi-img.jpg';
import SystemsInformationImage from '../imgs/sys-img.jpg';
import Grid from '@mui/material/Unstable_Grid2';

export default function CoursesList() {

    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
      try {
        const response = await api.get('/api/v1/courses');
        console.log(response.data);
        setCourses(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getCourses();
    }, [])

    return (
        <>
            <Header>Cursos: </Header>
            <Grid container spacing={1} style={{marginLeft: "20px", marginRight: "20px"}}>
                {courses.map((course) => (
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <CoursesCard
                            key={course.id}
                            course={course}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}