import '../css/styles.css'

function PageSection(props) {
    var backgroundColor = 'white';
    var color = 'black'

    switch(props.backgroundColor) {
        case 'blue':
            backgroundColor = '#2B50AA'
            color = 'white'
            break
        case 'grey':
        case 'gray':
            backgroundColor = '#F3F5F7'
            break
        default:
            backgroundColor = 'white'
            break
    }

    var height = props.height ? props.height : 'auto'

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: backgroundColor,
                padding: '96px 0px',
                color: color,
                height: height
            }}
        >
            {props.children}
        </div>
    );
}

export default PageSection;