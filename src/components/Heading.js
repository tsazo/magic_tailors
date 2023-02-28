import '../css/styles.css'

function Heading(props) {
  var fontSize = props.fontSize ? props.fontSize : '40px';
  
  return (
    <p style={{ fontSize: fontSize }} className='heading'>
        {props.children}
    </p>
  );
}

export default Heading;