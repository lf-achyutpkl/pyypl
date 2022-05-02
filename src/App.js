import React from 'react';
import pyypl from './images/pyypl-round.png';

import './App.css';

function App() {
  console.log('rendering pyypl App');
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={pyypl} className='pyyplLogo' alt='logo' />
        Hello
      </div>
      ;
    </div>
  );
}

export default App;
