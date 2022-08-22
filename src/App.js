import React from 'react';
import './index.css';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
