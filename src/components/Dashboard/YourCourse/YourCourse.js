import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import CourseDataTable from '../CourseDataTable/CourseDataTable';
import Sidebar from '../Sidebar/Sidebar';
import YourCourseDataTable from './YourCourseDataTable';

const YourCourse = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [list, setList] = useState([]);
    useEffect(()=>{
        fetch('https://pure-fortress-93000.herokuapp.com/yourCourse', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setList(data));
    },[])
    list && console.log(list)
    return (
        <div>
             <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-9 p-4 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <Navbar></Navbar>
           
            <YourCourseDataTable  courses={list}></YourCourseDataTable>
        </div>
    </section>    
        </div>
    );
};

export default YourCourse;