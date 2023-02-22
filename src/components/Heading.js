import '../css/styles.css'

function Heading(props) {
  return (
    <p className='heading'>
        {props.children}
    </p>
  );
}

export default Heading;