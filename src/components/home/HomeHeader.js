import { useState } from 'react'
import '../../css/HomeHeader.css'
import Button from '../Button'

var slogans = ["WE SEW WONDERS", "FASHION MAGIC AT WORK", "TAILORED TO PERFECTION"]

const getRandomObject = (array) => {
  const randomObject = array[Math.floor(Math.random() * array.length)];
  return randomObject;
};

const HomeHeader = () => {
  const [randomData, setRandomData] = useState(() => getRandomObject(slogans));

  return (
    <div className='home-header-container'>
      <div className='home-header'>

      <div className='home-header-text'>
          <h1>MAGIC TAILOR'S</h1>
          <h3>{randomData}</h3>
      </div>


      <Button to="/book">
        SCHEDULE APPOINTMENT
      </Button>
      </div>

    </div>
  );
}



export default HomeHeader;