import React from 'react';
  
const Book = () => {
    console.log("book now")
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '90vh'
      }}
    >
      <h1>book an appointment at geni's tailor shop</h1>
    </div>
  );
};
  
export default Book;