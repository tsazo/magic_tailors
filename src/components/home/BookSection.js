import Button from '../../components/Button';
import Heading from '../../components/Heading';
import SectionLine from '../../components/SectionLine';
import PageSection from '../../components/PageSection';

function BookSection(props) {
  return (
    <PageSection backgroundColor={props.backgroundColor}>
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
          <p style={{ margin: '8px', width:'50%' }}>
          Experience the magic of custom tailoring at Magic Tailor's and let us weave a sartorial spell on your wardrobe. With meticulous precision and unwavering commitment to perfection, we will ensure that every stitch is flawless, every seam seamless, and every button perfectly placed. Book your appointment today.</p>
        </div>
        <Button to="/book">BOOK NOW</Button>
    </PageSection>
  );
}



export default BookSection;