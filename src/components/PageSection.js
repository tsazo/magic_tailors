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
    var padding = props.padding ? props.padding : '88px 0px'

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: backgroundColor,
                padding: padding,
                color: color,
                height: height,
                borderTopLeftRadius: props.isRounded ? '30px' : 0,
                borderTopRightRadius: props.isRounded ? '30px' : 0,
                position: props.isRounded ? 'relative' : 0 ,
                top: props.isRounded ? '-30px' : 0 ,
            }}
        >
            {props.children}
        </div>
    );
}

export default PageSection;