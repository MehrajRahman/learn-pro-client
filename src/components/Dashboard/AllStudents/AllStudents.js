import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import CourseDataTable from '../CourseDataTable/CourseDataTable';
import Sidebar from '../Sidebar/Sidebar';

const AllStudents = () => {
    
        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const [list, setList] = useState([]);
        useEffect(()=>{
            fetch('https://pure-fortress-93000.herokuapp.com/allStudents')
                .then(res => res.json())
                .then(data => setList(data));
        },[])
        list && console.log(list);
        const callApi =(e)=>{
            console.log(e)
            const id = e._id;
            fetch(`https://pure-fortress-93000.herokuapp.com/update/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(e)
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        alert("Updated")
                    }
                })
        }
        
        return (
            <div>
                 <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-9 p-4 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <Navbar></Navbar>
               
                <CourseDataTable callApi={callApi}  courses={list}></CourseDataTable>
            </div>
        </section>    
            </div>
        );
};

export default AllStudents;