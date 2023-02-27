import React from 'react';
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
        <Button to="/services">VIEW ALL SERVICES</Button>
      </PageSection>

      {/* TODO: Move to a Review Section js file */}
      <PageSection>
        <Heading>Reviews</Heading>
        <SectionLine></SectionLine>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            margin: '24px'
          }}
        >
          <img style={{ height: '40px', margin:'16px'}} src={logo_black}/>
          <p style={{ margin: '8px', width:'50%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ipsum id nisl blandit iaculis ac in nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis consequat leo laoreet neque aliquam finibus. Mauris finibus.</p>
          <p style={{ fontWeight:'bold' }}>NICHOLAS Z.</p>
        </div>
        <Button to="/reviews">READ ALL REVIEWS</Button>
      </PageSection>

      {/* TODO: Move to a Contact Section js file */}
      <PageSection backgroundColor='grey'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '90%',
            height: '55vh',
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
            }}></div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems:'baseline',
              width: '45%',
              height: 'inherit',
              padding: '24px'
            }}>
              <p style={{fontWeight:'bold'}}>MAGIC TAILOR'S</p>
              <SectionLine/>
              <p>
                Monday <br/>
                Monday <br/>
                Monday <br/>
                Monday <br/>
                Monday <br/>
                Monday <br/>
                Monday <br/>
              </p>
              <Button to="/contact">GET DIRECTIONS</Button>
            </div>
        </div>
      </PageSection>

      {/* TODO: Move to a Book Section js file */}
      <PageSection>
        <Heading>BOOK NOW</Heading>
        <SectionLine></SectionLine>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            margin: '24px'
          }}
        >
          <p style={{ margin: '8px', width:'50%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ipsum id nisl blandit iaculis ac in nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis consequat leo laoreet neque aliquam finibus. Mauris finibus.</p>
        </div>
        <Button to="/book">BOOK NOW</Button>
      </PageSection>

    </div>
  );
};
  
export default Home;