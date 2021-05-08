import React from 'react';
import image from '../../../images/img1.jpg';
import './MainContent.css';

const MainContent = () => {
    return (
        
        <div className="container pt-5">
            
            <div className="row ">
            
            <div className=" col-md-6">
                <img style={{width: '500px'}} src={image} alt=""/>
            </div>
            <div className="col-md-6">
                <h1 className="heading">Lets Start with our <br/> Crash Course</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cumque tempora totam ipsum laudantium facere labore nihil dolore molestiae obcaecati?</p>
                <div className="d-flex justify-content-around">
                <p className="text"><span className="number">5000+</span><br/>Students</p>
                <p className="text"><span className="number">50+</span><br/>Courses</p>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default MainContent;