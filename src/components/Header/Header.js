import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <h2>Header</h2>
            <div className="navbar">
            
                <div >
                   <img className="logo" src={logo} alt=""/>
                  
                </div>
                <div >
                    <a className="bar" href="#">Home</a>
                    <a className="bar" href="#"> Order</a>
                    <a className="bar" href="#">Review</a>
                    <a className="bar" href="#">inventory</a>
                </div>
            </div>
        </div>
    );
};

export default Header;