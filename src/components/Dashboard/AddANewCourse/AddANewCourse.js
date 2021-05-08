import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const AddANewCourse = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        
        setFile(newFile);
        console.log(file)
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
      
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('price', info.price);
        formData.append('desc', info.desc);
        console.log(formData);
        fetch('https://pure-fortress-93000.herokuapp.com/addNewCourse', {
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
            <h5 className="text-brand">Add a New Course</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Course Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="desc" placeholder="Course Details" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" name="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
    );
};

export default AddANewCourse;