import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;