import React, { useContext, useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import c1 from '../../../images/courses/c1.jpg';
import c2 from '../../../images/courses/c2.jpg';
import c3 from '../../../images/courses/c3.jpg';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router';
const data =[
    {
        name: "Genetics",
        id: 1,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, enim!',
        price: "$1280",
        image: c1
    },
    {
        name: "Data Structure",
        id: 2,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, enim!',
        price: "$1500",
        image: c2
    },
    {
        name: "Physics",
        id: 3,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, enim!',
        price: "$2500",
        image: c3
    }
]

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const history = useHistory()
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);
    const handleClick = (course)=>{
        const newUser = {...loggedInUser};
        newUser.courses[0] = course;
        newUser.date = new Date();
        setLoggedInUser(newUser);
        console.log(loggedInUser)
        history.push('/shipment');

    }
    useEffect(()=>{
        fetch('https://pure-fortress-93000.herokuapp.com/courses')
        .then(res => res.json())
        .then(result => setCourses(result))
    },[])
    courses && console.log(courses)
    return (
        <div className="container pb-5 ">
            <div className="row ">
            <h2 className="text-center text-primary pb-5 ">Our Crash Course Programme</h2>
            {
                courses.map(course => <CourseCard handleClick={handleClick} key={course.id} course={course}></CourseCard>)
            }
           
        </div>
        </div>
        
    );
};

export default Courses;