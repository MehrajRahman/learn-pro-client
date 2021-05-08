import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});
    const handleBlur = e => {
        const newInfo = { ...admin };
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }

   

    const handleSubmit = (e) => {
        const formData = new FormData()
      
        formData.append('name', admin.name);
        formData.append('email', admin.email);
        console.log(formData);
        fetch('https://pure-fortress-93000.herokuapp.com/makeAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault();
    }
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-9 p-4 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <Navbar></Navbar>
            <h5 className="text-brand">Make a Admin</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">email</label>
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter the email" />
                </div>
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="name" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
        
    );
};

export default MakeAdmin;