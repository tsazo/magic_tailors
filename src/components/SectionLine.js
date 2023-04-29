import '../css/styles.css'

function SectionLine(props) {
    var width = props.width ? props.width : '40px'
    var margin = props.margin

    return (
        <span
            style={{
                backgroundColor: '#2B50AA',
                // color: color,
                height: '2px',
                width: width,
                display: 'block',
                margin: margin,
            }}
        >
        </span>
    );
}

export default SectionLine;