import React     from 'react';
import axios from 'axios';
import {Header} from '../styled-components/courses_list';
import CoursesCard from './courses_card';
import ComputerScienceImage from '../imgs/csi-img.jpg';
import SystemsInformationImage from '../imgs/sys-img.jpg';
import Grid from '@mui/material/Unstable_Grid2';

export default function CoursesList() {

    const [courses, setCourses] = React.useState([]);

    const courses_list = [
        {
            id: 1,
            image: ComputerScienceImage,
            name: "Computer Science",
            coordinator: "Dr. John Doe",
            description: "This is a computer science course."
        },
        {
            id: 2,
            image: SystemsInformationImage,
            name: "Systems Information",
            coordinator: "Dr. Jane Doe",
            description: "This is a systems information course."
        },
        {
            id: 3,
            image: SystemsInformationImage,
            name: "Systems Information",
            coordinator: "Dr. Jane Doe",
            description: "This is a systems information course."
        },
        {
            id: 4,
            image: SystemsInformationImage,
            name: "Systems Information",
            coordinator: "Dr. Jane Doe",
            description: "This is a systems information course."
        },
        {
            id: 5,
            image: SystemsInformationImage,
            name: "Systems Information",
            coordinator: "Dr. Jane Doe",
            description: "This is a systems information course."
        },
        //Later we'll connect this with DynamoDB
    ];

    React.useEffect(() => {
        setCourses(courses_list);
    }, []);

    return (
        <>
            <Header>Courses: </Header>
            <Grid container spacing={4} style={{marginLeft: "20px", marginRight: "20px"}}>
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