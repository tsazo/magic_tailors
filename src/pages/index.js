import React from 'react';
import HomeHeader from '../components/home/HomeHeader';
import PageSection from '../components/PageSection';
import logo_black from '../assets/icons/logo_black.png';
import logo_white from '../assets/icons/logo_white.png';
import mt from '../assets/icons/mt_typography.png';
import needle from '../assets/icons/needle.png';
import family from '../assets/icons/family.png';
import check from '../assets/icons/check.png';
import store_stock from '../assets/img/store_stock_photo.jpg';
import Heading from '../components/Heading';
import SectionLine from '../components/SectionLine';
import Button from '../components/Button';
  
const Home = () => {
    console.log("hello")
  return (
    <div>
      <HomeHeader></HomeHeader>

      {/* TODO: May want to move to it's own file*/}
      <PageSection isRounded='true' padding='88px 0px 0px 0px'>
        <div style={{ width: '50%'}} >
          <p style={{ margin: '0px 0px 24px', fontSize: '60px', fontWeight: '500', lineHeight: '75px',}}>
            Expert custom fittings and altercations.
          </p>
          <p style={{fontSize: '20px', margin: '0px 0px 24px 0px',}}>Enjoy the confidence of well-fitting clothes.</p>
        </div>

        {/* marketing points */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            margin: '40px 20px'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '250px'
          }}>
            <img style={{ height: '50px'}} src={needle}/>
            <p style={{ fontSize: '18px', marginBottom: '16px' }}>Operating for 25 years</p>
            <p style={{ margin: '0px'}}> Unlocking your wardrobe's full potential, since 1998.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '250px'
          }}>
            <img style={{ height: '50px'}} src={check}/>
            <p style={{ fontSize: '18px', marginBottom: '16px' }}>Walk-ins welcome</p>
            <p style={{ margin: '0px'}} >Providing same-day services for altercations.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '250px'
          }}>
            <img style={{ height: '50px'}} src={family}/>
            <p style={{ fontSize: '18px', marginBottom: '16px' }}>Family-owned & operated</p>
            <p style={{ margin: '0px'}} >Great quality and insight comes from working with the people we know best.</p>
          </div>
        </div>
      </PageSection>

      {/* TODO: Move to a Services Section js file */}
      <PageSection padding='0px 0px 88px 0px'>
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

      {/* TODO: May want to move to it's own file*/}
      <PageSection backgroundColor='blue'>
        <img style={{ height: '50px'}} src={logo_white} alt="Magic Tailors' Logo" />
        <p style={{width: '50%'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non velit metus. Praesent tempor lorem a ipsum pharetra fringilla. Quisque at massa eu risus porttitor.
        </p>
        <img style={{ height: '20px'}} src={mt}/>
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
              <p style={{fontWeight:'bold'}}>MAGIC TAILOR'S</p>
              <SectionLine/>
              <p style={{textAlign: 'left',}}>
                Monday <br/>
                Tuesday <br/>
                Wednesday <br/>
                Thursday <br/>
                Friday <br/>
                Saturday <br/>
                Sunday <br/>
                <br/>
                Address Line 1 <br/>
                Address Line 2 <br/>
                Phone <br/>
                <br/>
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