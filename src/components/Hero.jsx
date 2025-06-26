import React from 'react';
import './Hero.css';
import pic from '../assets/pic.jpeg'; 

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <p>Hello, I’m Dhanush,</p>
        <h1>
          <span>Front-End</span> <br />
          <span>Developer</span>
        </h1>
        <p className="location">based in India.</p>
        <button className="resume-btn">Resume</button>
      </div>
      <div className="hero-right">
        <div className="circle-frame">
          <img src={pic} alt="Dhanush" />
          <span className="dots">✚✚</span>
          <span className="slashes">////</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
