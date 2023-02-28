import { useState } from 'react'
import '../../css/HomeHeader.css'
import Button from '../Button'
import Heading from '../Heading'

var slogans = ["WE SEW WONDERS", "FASHION MAGIC AT WORK", "TAILORED TO PERFECTION"]

const getRandomObject = (array) => {
  const randomObject = array[Math.floor(Math.random() * array.length)];
  return randomObject;
};

const HomeHeader = () => {
  const [randomData, setRandomData] = useState(() => getRandomObject(slogans));

  return (
    <div className='home-header'>
        {/* <img 
          style={{width: '100vw', height: '85vh', objectFit: 'cover', opacity: '0.7'}} 
          src={stock} 
          alt="Tailor shop stock photo of threads" /> */}

        <div className='home-header-text'>
            {/* <Heading fontSize='50px'>MAGIC TAILOR'S</Heading> */}
            <h1>MAGIC TAILOR'S</h1>
            {/* <p style={{fontSize: '18px'}}><b>{randomData}</b></p> */}
            <h3>{randomData}</h3>
        </div>


        <Button to="/book">
          SCHEDULE APPOINTMENT
        </Button>
      </div>
  );
}



export default HomeHeader;