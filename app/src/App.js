import React from 'react';
import './App.css';

import CompoundingCalculator from './components/CompoundingCalculator';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <CompoundingCalculator/>
     <Footer/>
    </div>
  );
}

export default App;
