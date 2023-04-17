import PageSection from '../../components/PageSection';
import home_stock from '../../assets/img/home_stock_photo2.jpg';
import home_stock3 from '../../assets/img/home_stock_photo4.jpg';
import Button from '../../components/Button';

const ServicesSection = () => {
  return (
    <PageSection padding='32px 0px 88px 0px'>
        <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
              margin: '0px',
              height: '60vh',
              overflow:'hidden',
              textAlign: 'left',
            }}
          >
          <img style={{ width: '50%'}} src={home_stock3} alt="End of suit jacket sleeve" />
          <div style={{width:'-webkit-fill-available', padding: '80px'}}>
            <p>Walk-ins Welcome</p>
            <p>Contact us for an appointment today! <br/> Walk-ins are also welcome!</p>
            <p>From elegant evening dresses to dapper suits, you can count on us to work closely with you to alter, hem, and stitch your garments.</p>
            <i>Cash Only</i>
          </div>
        </div>
        <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
              margin: '0px 0px 24px 0px',
              height: '60vh',
              overflow:'hidden'
            }}
          >
          <div style={{width:'-webkit-fill-available'}}>
            Contact us for an appointment today! <br/> Walk-ins are also welcome! <br/> Cash Only
            <Button to="/services">VIEW ALL SERVICES</Button>
          </div>
          <img style={{ width: '50%'}} src={home_stock} alt="Thread station" />
        </div>
    </PageSection>
  );
}



export default ServicesSection;