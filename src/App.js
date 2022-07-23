import Navbar from './Navbar';
import Home from './Home';
import React from 'react';


function App() {
  const title = "Welcome to my new app";
  const likes = 50;
    

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <img src="../public/picture.jpg" alt= "Picture"/>
        </div>
    </div>
  );
}

document.querySelector('html').style.backgroundColor = 'aqua';


export default App;