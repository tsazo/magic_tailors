import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeHeader from '../components/home/HomeHeader';
import PageSection from '../components/PageSection';
import logo_black from '../assets/icons/logo_black.png';
import logo_white from '../assets/icons/logo_white.png';
import mt from '../assets/icons/mt_typography.png';
import Heading from '../components/Heading';
import SectionLine from '../components/SectionLine';
import Button from '../components/Button';
  
const Home = () => {
    console.log("hello")
  return (
    <div>
      <HomeHeader></HomeHeader>

      {/* TODO: May want to move to it's own file*/}
      <PageSection backgroundColor='blue'>
        <img style={{ height: '50px'}} src={logo_white}/>
        <p style={{width: '50%'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non velit metus. Praesent tempor lorem a ipsum pharetra fringilla. Quisque at massa eu risus porttitor.
        </p>
        <img style={{ height: '20px'}} src={mt}/>
      </PageSection>

      {/* TODO: Move to a Services Section js file */}
      <PageSection backgroundColor='grey'>
        <Heading>Services</Heading>
        <SectionLine></SectionLine>
        <p style={{width: '50%'}}>
          <i>
            Contact us for an appointment today! <br/> Walk-ins are also welcome! <br/> Cash Only
          </i>
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            marginBottom: '24px'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img style={{ height: '50px'}} src={logo_black}/>
            <p style={{ fontSize: '24px' }}>Lorem</p>
            <p style={{ width: '125px', margin: '0px' }}>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img style={{ height: '50px'}} src={logo_black}/>
            <p style={{ fontSize: '24px' }}>Lorem</p>
            <p style={{ width: '125px', margin: '0px' }}>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img style={{ height: '50px'}} src={logo_black}/>
            <p style={{ fontSize: '24px' }}>Lorem</p>
            <p style={{ width: '125px', margin: '0px' }}>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <Button>VIEW ALL SERVICES</Button>
      </PageSection>

      <NavLink
        className="nav-link"
        to="/reviews"
        >
        REVIEWS
      </NavLink>
    </div>
  );
};
  
export default Home;