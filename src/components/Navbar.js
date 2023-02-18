import '../css/Navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar({ activePage }) {

  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="nav">
        <div className="nav-link title-text">
            <NavLink
                to="/"
                end>
                MAGIC TAILORS
            </NavLink>
        </div>
        <ul className="nav-list">
            <li>
                <NavLink
                    to="/"
                    end
                >
                {/* className="nav-link" href="#" rel="noopener noreferrer" */}
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/services"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >
                    {/* className="nav-link" href="#" rel="noopener noreferrer" */}
                    SERVICES
                </NavLink>
            </li>
            <li>
                <NavLink
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
  );
}

export default Navbar;