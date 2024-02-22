import React from 'react';
import "./Box.css";
import image from "../images/ai.png";
import image2 from '../images/docs.png'
import image3 from '../images/wikis.png'
import image4 from '../images/pr.png';
import image5 from '../images/calender.png';
const ImageBox = ({ imageUrl, heading, paragraph }) => {
  return (
    <div className="box-container">
    <div className="box">
      <img src={image} alt="Box Image" className="box-image" height="30" width="30"/>
      <div className="box-content">
        <h1>AI</h1>
        <p>Ask literally anything. Notion will answer.</p>
      </div>
    </div>

    <div className="box">
      <img src={image2} alt="Box Image" className="box-image" height="25" width="20"/>
      <div className="box-content">
        <h1>Docs</h1>
        <p>Simple, powerful, beautiful. Next-gen notes & docs</p>
      </div>
    </div>

    <div className="box">
      <img src={image3} alt="Box Image" className="box-image" height="30" width="22"/>
      <div className="box-content">
        <h1>Wikis</h1>
        <p>Centralise your knowledge. No more hunting for answers.</p>
      </div>
    </div>

    <div className="box">
      <img src={image4} alt="Box Image" className="box-image" height="30" width="32"/>
      <div className="box-content">
        <h1>Projects</h1>
        <p>Make complex projects without the chaos.</p>
      </div>
    </div>

    <div className="box">
      <img src={image5} alt="Box Image" className="box-image" height="32" width="27"/>
      <div className="box-content">
        <h1>Calender</h1>
        <p>New! Manage your time and projects, together.</p>
      </div>
    </div>
    </div>
  );
}

export default ImageBox;
