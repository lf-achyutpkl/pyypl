// import pyypl from './images/pyypl.jpeg';

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={pyypl} className="" alt="logo" />
//         <p>
//           Welcome to Pyypl World!!
//         </p>

//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
