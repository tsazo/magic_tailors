import { NavLink } from 'react-router-dom';
import '../css/styles.css'

function Button(props) {
    var backgroundColor = '#2B50AA';
    var color = 'white'
    var className = 'button'
    var type = props.type

    switch(type) {
      case 'primary':
        backgroundColor = '#2B50AA'
        color = 'white'
        className = 'button'
        break
      case 'secondary':
        backgroundColor = '#F3F5F7'
        color = "black"
        className = 'button'
        break
      case 'inline':
        backgroundColor = 'transparent'
        color = '#2B50AA'
        className = 'inline-button'
        break
      default:
        backgroundColor = '#2B50AA'
        color = 'white'
        className = 'button'
        break
    }

  return (
    <NavLink 
      to={props.to} 
      style={{
        backgroundColor: backgroundColor,
        color: color
      }} 
      className = {className}
    >
      {props.children}
    </NavLink>
  );
}

export default Button;