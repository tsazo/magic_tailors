import '../css/Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/logo_black.png'
import classnames from "classnames";

function Navbar({ activePage, visible }) {

  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div style={{zIndex: '1'}} className={classnames("nav", {
        "navbar--hidden": !visible
      })}>
        <div className="title">
            <NavLink
                className="title-nav-link"
                to="/"
                end>
                <img style={{ height: '30px', marginRight: '8px' }} src={logo}/>
                MAGIC TAILOR'S
            </NavLink>
        </div>
        <div>
            <ul className="nav-list">
                <li>
                    <NavLink
                        className="nav-link"
                        to="/"
                        end
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-link"
                        to="/services"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        SERVICES
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-link"
                        to="/about"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        ABOUT US
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-link"
                        to="/contact"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        CONTACT
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-link"
                        to="/book"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                        BOOK
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;