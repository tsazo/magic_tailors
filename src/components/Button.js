import '../css/styles.css'

function Button(props) {
  let color = props.backgroundColor ? props.backgroundColor : "#2B50AA"

  return (
    <button style={{backgroundColor: color}} className='button'>
        {props.children}
    </button>
  );
}

export default Button;