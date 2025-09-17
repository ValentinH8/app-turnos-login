import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem('user');
    const parsed = raw ? JSON.parse(raw) : null;
    setUser(parsed?.user || null);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    window.location.reload();
  };

  return (
    <nav>
  <div>Henry Peluquería</div>
  <ul>
    <li><Link to="/">INICIO</Link></li>
    <li><Link to="/misturnos">TURNOS</Link></li>
  </ul>
  <section className='container'>
    {user ? (
      <>
        <span>{user.name} (ID: {user.id})</span>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </>
    ) : (
      <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
    )}
  </section>
</nav>

  );
};

export default Navbar;
