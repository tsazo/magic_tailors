import React from 'react';
import PageSection from '../components/PageSection';
import SectionLine from '../components/SectionLine';
import store_stock from '../assets/img/store_stock_photo.jpg';
  
const Contact = () => {
  return (
    <PageSection padding='32px 0px 88px 0px'>
        <div>
          <h1>CONTACT</h1>
          <h2>Call us at (516) 766 – 2443 or visit us during opertating hours.</h2>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '90%',
            height: '70vh',
            backgroundColor: 'white',
            margin: '24px'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '55%',
              height: 'inherit',
              backgroundColor: 'black',
              overflow:'hidden',
            }}>
              <img style={{ width: '100%', objectPosition: 'center 100px'}} src={store_stock} alt="Magic Tailors' Logo" />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems:'baseline',
              width: '45%',
              height: 'inherit',
              padding: '24px',
              textAlign: 'left',
            }}>
              <h2>MAGIC TAILOR'S</h2>
              <SectionLine/>
              <p style={{textAlign: 'left',}}>
                44 N Village Ave <br/>
                Rockville Centre, NY 11570 <br/>
                <br/>
                (516) 766-2443 <br/>
                <br/>
              </p>
              <h2>STORE HOURS</h2>
              <SectionLine/>
              <p style={{textAlign: 'left',}}>
                Monday: 9 AM – 5 PM <br/>
                Tuesday: 9 AM – 7 PM <br/>
                Wednesday: Closed <br/>
                Thursday: 9 AM – 7 PM <br/>
                Friday: 9 AM – 5 PM <br/>
                Saturday: 9 AM – 5 PM <br/>
                Sunday: By Appointment <br/>
                <br/>
              </p>
            </div>
        </div>
    </PageSection>
  );
};
  
export default Contact;