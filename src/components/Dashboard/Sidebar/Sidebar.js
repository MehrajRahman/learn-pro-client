  
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faBook, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://pure-fortress-93000.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                
                <li>
                    <Link to="/shipment" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Enroll</span>
                    </Link>
                </li>
                <li>
                    <Link to="/yourCourse" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Your Courses</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faBook} /> <span>Review</span>
                    </Link>
                </li>
                
               
                {isAdmin && 
                    <div>
                    <li>
                        <Link to="/addNewCourse" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Add a new Course</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/newMentor" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Add a new mentor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allStudents" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Students</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                    </div>}
                
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;