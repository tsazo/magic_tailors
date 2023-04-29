import PageSection from '../../components/PageSection';
import SectionLine from '../SectionLine';

const ServicesList = () => {
  return (
    <PageSection padding='88px 0px 0px 0px'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            textAlign: 'left',
            flexWrap: 'wrap',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Men</p>
            <SectionLine/>
            <p>
              Our tailoring services offer a range of men's wear options, including suits, shirts, trousers, and jackets, as well as specialized services such as alterations and repairs.
            </p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Women</p>
            <SectionLine/>
            <p>
              We offer services on garments including dresses, blouses, skirts, and pants, as well as specialized services such as alterations and repairs.
            </p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Prom</p>
            <SectionLine/>
            <p>
              Prom being a special occassion for our high school seniors, we are equipped assist in altering dresses, suits, and tuxedos. The aim is to create a custom-fit outfit that is not only perfectly fitted but also stylish and comfortable.
            </p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Bridal</p>
            <SectionLine/>
            <p>
              With any wedding we may handle any garment such as the bridal gown, wedding dress, bridesmaid dress alterations, veil and accessory customizations, and groom needs. 
            </p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Fit & Style Consultations</p>
            <SectionLine/>
            <p>
              Let us help you feel confident in making your clothes fit to you and your body.
            </p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Custom Requests</p>
            <SectionLine/>
            <p>
              Don't see the service you're looking for here? Feel free to visit the store during operating hours and we will cater to your request. 
            </p>
          </div>
        </div>
      </PageSection>
  );
}



export default ServicesList;