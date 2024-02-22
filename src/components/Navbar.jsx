import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import image from "../images/logo1.jpeg";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='left'>
                <img src={image} className='navbar_image' height='32' width='32' />
                <p>Notion</p>

                <div className="dropdown">
                    <button className='left_buttons'>
                        <span className='button-text'>Products</span>
                        <span className='dropdown-icon'><RiArrowDropDownLine/></span>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">AI</a>
                        <a href="#">Docs</a>
                        <a href="#">Calender</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className='left_buttons'>
                    <span className='button-text'>Download</span> 
                    <span className='dropdown-icon'><RiArrowDropDownLine/></span>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">AI</a>
                        <a href="#">Docs</a>
                        <a href="#">Calender</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className='left_buttons'>
                    <span className='button-text'>Solutions</span>
                    <span className='dropdown-icon'><RiArrowDropDownLine/></span>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">AI</a>
                        <a href="#">Docs</a>
                        <a href="#">Calender</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className='left_buttons'>
                    <span className='button-text'>Resources</span> 
                    <span className='dropdown-icon'><RiArrowDropDownLine/></span>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">AI</a>
                        <a href="#">Docs</a>
                        <a href="#">Calender</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className='left_buttons'>
                    <span className='button-text'>Pricing</span>
                    </button>
                </div>
            </div>
            <div className='right'>
                <p>Request a demo</p>
                <p className='line'>|</p>
                <p>Log in</p>
                <button><b>Get Notion Free</b></button>
            </div>
        </nav>
    );
};

export default Navbar;