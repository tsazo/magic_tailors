import '../../css/HomeHeader.css'
import { NavLink } from 'react-router-dom';
import Button from '../Button'
import Heading from '../Heading'

const HomeHeader = () => {
  return (
    <div className='home-header'>
        {/* <img 
          style={{width: '100vw', height: '85vh', objectFit: 'cover', opacity: '0.7'}} 
          src={stock} 
          alt="Tailor shop stock photo of threads" /> */}

        <div className='home-header-text'>
            <Heading>MAGIC TAILOR'S</Heading>
            <p><b>SAME DAY SERVICE AVAILABLE</b></p>
            <p>Expert Custom Fittings and Altercations</p>
        </div>


        <Button to="/book">
          SCHEDULE APPOINTMENT
        </Button>
      </div>
  );
}



export default HomeHeader;