import React from 'react';
import Slideshow from '../components/Slideshow';
  
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '90vh'
      }}
    >
      <Slideshow/>
    </div>
  );
};
  
export default About;