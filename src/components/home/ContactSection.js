import PageSection from '../../components/PageSection';
import store_stock from '../assets/img/store_stock_photo.jpg';
import Button from '../components/Button';

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
  );
}



export default ContactSection;