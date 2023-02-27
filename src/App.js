import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Services from './pages/services';
import About from './pages/about';
import Contact from './pages/contact';
import Book from './pages/book';
import Reviews from './pages/reviews';

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
  }

  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  return (
    <div className="App">
      {/* <button onClick={getData}>Click me</button> */}
      <Router>
        <Banner />
        {/* better way to handle navbar -- create a state in which onClick navbar sets the state to the page active */}
        <Navbar visible={visible}/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/book' element={<Book />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;