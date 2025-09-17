import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './views/Home/Home.jsx';
import MisTurnos from './views/MisTurnos/MisTurnos.jsx';
import Register from './views/Register/Register.jsx';
import Login from './views/Login/Login.jsx';
import About from './views/About/About.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/misturnos" element={<MisTurnos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      <About />
    </div>
  );
}

export default App;