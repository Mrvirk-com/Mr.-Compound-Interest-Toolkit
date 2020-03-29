import React from 'react';
import './App.css';
//import "denali-css/css/denali.css";
//import "denali-icon-font/dist/denali-icon-font.css"; 

import Main from './components/Main';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <body>
  <div style={{overflow:"auto"}}>
     <Menu/>
     <Main/>
     
  </div>
  <Footer/>
</body>
  );
}

export default App;
