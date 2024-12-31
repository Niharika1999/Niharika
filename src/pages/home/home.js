import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <div className="leftSection">
        <h1 className="heading">
          Hi! This is Niharika, a website designer and developer
        </h1>
        <p className="description">
        I love creating websites that blend seamless functionality with striking visuals, 
        making them a joy to explore. 
        My passion lies in crafting user-friendly experiences and diving into the world of digital marketing. 
        I’m constantly inspired by unique marketing ideas in everyday life, 
        believing in their power to elevate brands and small projects to extraordinary heights.
        </p>
        <button className="button-primary">Get in Touch →</button>
      </div>
      <div className="rightSection">
        <img
          src={`${process.env.PUBLIC_URL}/computer-work.gif`}
          alt="Computer Work"
          className="image"
        />
      </div>
     
    </div>
  );
}