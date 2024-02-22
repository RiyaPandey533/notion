import React from 'react';
import './Hero.css';
import image from "../images/bg.webp";
import { FaArrowRight } from 'react-icons/fa';
const HeroSection = () => {
  return (
    <><div className="hero-content">
        <span className='heading1'>Write, plan, share.<br />With AI at your side.</span>
        <p>Notion is the connected workspace where better, faster work happens.</p>
        {/* <button className='button1'>Try Notion Free<FaArrowRight className='arrow' /></button> */}
        <button className='button3'>Try Notion Free <FaArrowRight className='arrow' /></button>
        <button className='button4'>Request a demo <FaArrowRight className='arrow' /></button>
        {/* <button className="button4">Request a demo <FaArrowRight className='arrow' /></button> */}
        </div>
      <div className='bg-image'>
        <img src={image} height='225' width='625' />
      </div>
    </>
  );
}

export default HeroSection;
