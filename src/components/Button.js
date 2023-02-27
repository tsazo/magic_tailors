import { NavLink } from 'react-router-dom';
import '../css/styles.css'

function Button(props) {
  let color = props.backgroundColor ? props.backgroundColor : "#2B50AA"

  return (
    <NavLink to={props.to} style={{backgroundColor: color}} className='button'>
        {props.children}
    </NavLink>
  );
}

export default Button;