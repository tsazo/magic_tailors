import '../css/Navbar.css'
import { NavLink } from 'react-router-dom';
import Button from './Button';

function Footer() {

  return (
    <div style={{
        padding: '40px',
        backgroundColor: '#24428f',
        color: 'white',
    }}>
        <div style={{display: 'flex', justifyContent: 'space-between', textAlign: 'left'}}>
            <div>
                <h4>
                    STORE HOURS
                </h4>
                <p style={{textAlign: 'left',}}>
                Monday: 9 AM – 5 PM <br/>
                Tuesday: 9 AM – 7 PM <br/>
                Wednesday: Closed <br/>
                Thursday: 9 AM – 7 PM <br/>
                Friday: 9 AM – 5 PM <br/>
                Saturday: 9 AM – 5 PM <br/>
                Sunday: By Appointment <br/>
                <br/>
                Walk-ins Welcome <br/>
                <i>Cash Only</i>
              </p>
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
                <p>
                    Phone:<br/>
                    (516) 766 - 2443
                </p>
                <br/>
                <p>
                    Address: <br/>
                    44 N Village Ave <br/>
                    Rockville Centre, NY 11570
                </p>
                <Button type='secondary' to='/contact'>
                    Contact Us
                </Button>
            </div>

        </div>
    </div>
  );
}

export default Footer;