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
            <p> Unlocking your wardrobe's full potential, since 1998.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Women</p>
            <SectionLine/>
            <p>Providing same-day services for altercations.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Prom</p>
            <SectionLine/>
            <p>Great quality and insight comes from working with the people we know best.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Bridal</p>
            <SectionLine/>
            <p>Great quality and insight comes from working with the people we know best.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Fit & Style Consultations</p>
            <SectionLine/>
            <p>Great quality and insight comes from working with the people we know best.</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginBottom: '80px',
          }}>
            <p style={{ fontSize: '18px', marginBottom: '8px'}}>Custom Requests</p>
            <SectionLine/>
            <p>Great quality and insight comes from working with the people we know best.</p>
          </div>
        </div>
      </PageSection>
  );
}



export default ServicesList;