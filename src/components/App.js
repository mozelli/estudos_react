import React from 'react';
import './App.css';

import Header from './header/Header';
//import FaleConosco from './faleConosco/FaleConosco';
import Calculator from './calculator/Calculator';

function App() {
  return (
    <div className="container">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
