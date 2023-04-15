import '../css/Navbar.css'
import { NavLink } from 'react-router-dom';
import Heading from './Heading';
import Button from './Button';

function Footer() {

  return (
    <div style={{
        padding: '40px',
        backgroundColor: '#24428f',
        color: 'white'
    }}>
        <div style={{display: 'flex', justifyContent: 'space-between', textAlign: 'left'}}>
            <div className="title">
                <h4>
                    STORE HOURS
                </h4>
                <p>Monday: 9 AM – 5 PM</p>
                <p>Tuesday: 9 AM – 7 PM</p>
                <p>Wednesday: Closed</p>
                <p>Thursday: 9 AM – 7 PM</p>
                <p>Friday: 9 AM – 5 PM</p>
                <p>Saturday: 9 AM – 5 PM</p>
                <p>Sunday: By Appointment</p>
                <br/>
                <p>Walk-ins Welcome</p>
                <p>Cash Only</p>
            </div>
            <div>
                <ul className="footer-list">
                    <li>
                        <NavLink
                            className="footer-link"
                            to="/"
                            end
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="footer-link"
                            to="/services"
                        >
                            SERVICES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="footer-link"
                            to="/about"
                        >
                            ABOUT US
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="footer-link"
                            to="/contact"
                        >
                            CONTACT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="footer-link"
                            to="/book"
                        >
                            BOOK
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <p>Phone:</p>
                <p>(516) 766 - 2443</p>
                <br/>
                <p>Address:</p>
                <p>44 N Village Ave</p>
                <p>Rockville Centre, NY 11570</p>
                <Button backgroundColor='white' to='/contact'>Contact Us</Button>
            </div>

        </div>
    </div>
  );
}

export default Footer;