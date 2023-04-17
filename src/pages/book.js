import React from 'react';
import Calendly from '../components/Calendly'

const Book = () => {
    console.log("book now")
  return (
    <div
      style={{
        height: '90vh'
      }}
    >
      <h1>Book an Appointment</h1>
      <Calendly></Calendly>
    </div>
  );
};
  
export default Book;