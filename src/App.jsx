import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen  bg-gradient-to-r from-sky-500 to-indigo-500  font-serif	antialiased	">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;