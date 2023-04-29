import React from 'react';
import BookSection from '../components/home/BookSection';
import ServiceHeader from '../components/services/ServiceHeader';
import ServicesList from '../components/services/ServicesList';
  
const Services = () => {
  return (
    <div>
      <ServiceHeader />
      <ServicesList />
      <BookSection />
    </div>
  );
};
  
export default Services;