import React from 'react';
import Footer from '../Footer/Footer';
import Contact from './Contact/Contact';
import Courses from './Courses/Courses';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div >
            <Header></Header> 
            <Courses></Courses>
            <hr/>
            <MainContent></MainContent>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;