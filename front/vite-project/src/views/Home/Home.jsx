import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImagenesSlider from '../../components/imagenes/imagenes.jsx';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem('user');
    const parsed = raw ? JSON.parse(raw) : null;
    setUser(parsed?.user || null);
  }, []);

  return (
    <section id="inicio">
      <ImagenesSlider />

      {!user && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/login" style={{ marginRight: '15px' }}>
            <button>Iniciar Sesión</button>
          </Link>
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Home;
