import Button from '../../components/Button';
import PageSection from '../../components/PageSection';
import SectionLine from '../../components/SectionLine';
import store_stock from '../../assets/img/store_stock_photo.jpg';

const ContactSection = () => {
  return (
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
              <h2>MAGIC TAILOR'S</h2>
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
                44 N Village Ave <br/>
                Rockville Centre, NY 11570 <br/>
                <br/>
                (516) 766-2443 <br/>
                <br/>
              </p>
              <Button to="/contact">GET DIRECTIONS</Button>
            </div>
        </div>
    </PageSection>
  );
}



export default ContactSection;