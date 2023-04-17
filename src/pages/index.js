import React from 'react';

import HomeHeader from '../components/home/HomeHeader';

import ReviewSection from '../components/home/ReviewSection';
import Hook from '../components/home/Hook';
import ServicesSection from '../components/home/ServicesSection';
import ContactSection from '../components/home/ContactSection';
import BookSection from '../components/home/BookSection';
  
const Home = () => {

  return (
    <div>
      <HomeHeader />
      <Hook />
      <ReviewSection />
      <ServicesSection />
      <ContactSection />
      <BookSection />
    </div>
  );
};
  
export default Home;