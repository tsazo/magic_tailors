import React from 'react'

// const INTAKE_FORM = 'https://calendly.com/d/yvw-nwf-ygv?primary_color=2b50aa" style="min-width:320px;height:630px;';

const EVENT = 'https://calendly.com/mt-trial?hide_landing_page_details=1&primary_color=2b50aa';

class Calendly extends React.Component {
  // Append script to head tag in site
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js', 'async');
    head.appendChild(script);
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render(){
    return (
      <div>
        <div id="schedule_form">
          <div 
            className="calendly-inline-widget"
            data-url={ EVENT }
            style={{ minWidth: '320px', height: '670px' }} />
        </div>
      </div>
    );
  }
};

export default Calendly;