import '../css/styles.css'

function SectionLine(props) {
    var width = props.width ? props.width : '40px'

    return (
        <span
            style={{
                backgroundColor: '#2B50AA',
                // color: color,
                height: '2px',
                width: width
                
            }}
        >
        </span>
    );
}

export default SectionLine;