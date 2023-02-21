import '../css/Banner.css'
import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
        <NavLink className="banner-link" to="/book">
            SCHEDULE APPOINTMENT
        </NavLink>
    </div>
  );
}

export default Banner;