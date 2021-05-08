import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const CreateReview = () => {
    
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
        formData.append('designation', info.designation);
        formData.append('desc', info.desc);
        console.log(formData);
        fetch('https://pure-fortress-93000.herokuapp.com/addReview', {
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
            <h5 className="text-brand">Give your Review</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Your Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">designation</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Your Designation" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea onBlur={handleBlur} cols="30" rows="10" type="text" className="form-control" name="desc" placeholder="Your message" ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload your image</label>
                    <input onChange={handleFileChange} type="file" name="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
    );


   
};

export default CreateReview;