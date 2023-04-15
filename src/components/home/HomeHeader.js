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
    // <div style="height: 100vh;">
    //   <div class="home-header">
    //     <div class="home-header-text">
    //       <h1>MAGIC TAILOR'S</h1>
    //       <h3>FASHION MAGIC AT WORK</h3>
    //     </div>
    //     <a class="button" href="/book" style="background-color: rgb(43, 80, 170);">SCHEDULE APPOINTMENT</a>
    //   </div>
    //   <div style="background-color: black; height: -webkit-fill-available;">
    //   </div>
    // </div>
    <div className='home-header-container'>
      <div className='home-header'>

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

    </div>
  );
}



export default HomeHeader;