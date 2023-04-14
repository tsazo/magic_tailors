import PageSection from '../../components/PageSection';
import SectionLine from '../../components/SectionLine';
import Heading from '../Heading'
import Slideshow from '../Slideshow';

const ReviewSection = () => {

  return (
    <PageSection padding='40px 40px 88px 40px'>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2b50AA',
            borderRadius: '20px',
            color: 'white',
            padding: '48px',
            width: '80%',
        }}>
            <Heading>Reviews</Heading>
            <SectionLine></SectionLine>
            <Slideshow />
        </div>
    </PageSection>
  )
}



export default ReviewSection;