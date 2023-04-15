import { NavLink } from 'react-router-dom';
import '../css/styles.css'

function Button(props) {
    var backgroundColor = '#2B50AA';
    var color = 'white'

    switch(props.backgroundColor) {
        case 'blue':
            backgroundColor = '#2B50AA'
            color = 'white'
            break
        case 'grey':
        case 'gray':
            backgroundColor = '#F3F5F7'
            color = "black"
            break
        case 'white':
            backgroundColor = 'white'
            color = "black"
            break
        default:
            backgroundColor = '#2B50AA'
            break
    }

  return (
    <NavLink 
      to={props.to} 
      style={{
        backgroundColor: backgroundColor,
        color: color
      }} 
      className='button'
    >
      {props.children}
    </NavLink>
  );
}

export default Button;