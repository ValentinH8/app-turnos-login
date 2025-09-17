import React, { useEffect, useState } from 'react';

export default function Perfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem('user');
    if (raw) {
      const parsed = JSON.parse(raw);
      setUser(parsed.user || parsed);
    }
  }, []);

  if (!user) return <p>Cargando perfil...</p>;

  return (
    <div>
      <h2>Mi Perfil</h2>
      <p><strong>Nombre:</strong> {user.nombre || user.name}</p>
      <p><strong>DNI:</strong> {user.dni || 'No disponible'}</p>
      <p><strong>Cumpleaños:</strong> {user.cumpleaños || 'No disponible'}</p>
      <p><strong>Email:</strong> {user.email || 'No disponible'}</p>
      <p><strong>ID:</strong> {user.id}</p>

    </div>
  );
}
