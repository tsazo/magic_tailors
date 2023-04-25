import React from 'react';
import AboutHeader from '../components/about/AboutHeader';
import OurStory from '../components/about/OurStory';
import BookSection from '../components/home/BookSection';
  
const About = () => {
  return (
    <div>
      <AboutHeader />
      <OurStory />
      <BookSection backgroundColor='grey'/>
    </div>
  );
};
  
export default About;