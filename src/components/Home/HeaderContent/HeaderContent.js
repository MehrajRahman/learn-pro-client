import React from 'react';
import teacher from '../../../images/header.jpg';
import './HeaderContent.css'

const HeaderContent = () => {
    return (
        <div className="container pt-5">
            <div className="row ">
            <div className="col-md-6">
                <h1 className="heading">Welcome to  <br/> Learn Pro</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cumque tempora totam ipsum laudantium facere labore nihil dolore molestiae obcaecati?</p>
                <button className="btn btn-primary">Enroll Now</button>
            </div>
            <div className=" col-md-6">
                <img style={{width: '500px'}} src={teacher} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default HeaderContent;<h1>This is hader content</h1>