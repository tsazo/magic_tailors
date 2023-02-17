import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Amplify, API } from 'aws-amplify'
import configure from './aws-exports'

Amplify.configure(configure)


function App() {

   // new line start
   const [profileData, setProfileData] = useState(null)
   
   // custom API
   const getData = async () => {
    console.log("fetching data")
    const data = await API.get('api51043e73', '/hello')
    console.log(data)
    setProfileData(({
            profile_name: data.name,
            hello_world: data.hello}))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>{profileData.hello_world}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
  );
}

export default App;