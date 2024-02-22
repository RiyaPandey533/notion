import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import image1 from "../images/logo1.jpeg";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className='left-part'>
                    <div className='logo'>  
                        <img src={image1} className="footer-logo" alt="Logo" />
                        <p className="footer-heading">Notion</p>    
                    </div> 
                    <div className="social-icons">
                        <FaInstagram size={32} color="#e1306c" />
                        <FaTwitter size={32} color="#1da1f2" />
                        <FaLinkedin size={32} color="#0e76a8" />
                        <FaFacebook size={32} color="#1877f2" />
                        <FaYoutube size={32} color="#ff0000" />
                    </div>
                    <div className="language-dropdown">
                        <div className="dropdown">
                            <button className="dropbtn">Select Language</button>
                            <div className="dropdown-content">
                                <a href="#">English</a>
                                <a href="#">German</a>
                                <a href="#">French</a>
                                <a href="#">Spanish</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-columns">
                    <div className="footer-column">
                        <div className='element'>
                            <h2>Product</h2>
                            <p>AI</p>
                            <p>Docs</p>
                            <p>Wikis</p>
                            <p>Calendar</p>
                            <p>What's New</p>
                        </div>
                        <div className='element'></div>
                        <h2>Solutions</h2>
                        <p>Enterprise</p>
                        <p>Small Business</p>
                        <p>Personal Use</p>
                        <p>Remote Work</p>
                    </div>

                    <div className="footer-column">
                        <div className='element'>
                            <h2>Download</h2>
                            <p>iOs & Android</p>
                            <p>Mac & Windows</p>
                            <p>Calender</p>
                            <p>Web Clipper</p>
                        </div>

                        <div className='element'>
                            <h2>Build</h2>
                            <p>Integrations</p>
                            <p>Templates</p>
                            <p>API Docs</p>
                            <p>Guides and tutorials</p>
                            <p>Hire a consultant</p>
                            <p>Become a partner</p>
                            <p>Become an affiliate</p>
                        </div>

                        <div className='element'>
                            <h2>Learn</h2>
                            <p>Customer Stoies</p>
                            <p>Help center</p>
                            <p>Webinars</p>
                            <p>Blog</p>
                            <p>Community</p>
                        </div>
                    </div>

                    <div className="footer-column">
                        <div className='element'>
                            <h2>Get started</h2>
                            <p>Switch from confluence</p>
                            <p>Switch from Asana</p>
                            <p>Switch from evernote</p>
                            <p>Compare vs Monday</p>
                            <p>Compare vs Clickup</p>
                            <p>Compare vs Jira</p>
                        </div>
                        <div className='element'>
                            <h2>Resources</h2>
                            <p>Pricing</p>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Media Kit</p>
                            <p>Email us</p>
                            <p>Security</p>
                            <p>Cookie Settings</p>
                            <p>Terms and privacy</p>
                            <p>California Privacy Notice</p>
                            <p>Status</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer >
    );
}

export default Footer;
