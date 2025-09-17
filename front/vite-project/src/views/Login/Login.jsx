import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';  // Importamos Link
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password) {
            setError('Usuario y contraseña son obligatorios');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/users/login', formData);
            console.log('Login response:', response.data);
            const userData = {
                ...response.data,
                userId: response.data.id || response.data.userId
            };
            localStorage.setItem('user', JSON.stringify(userData));
            setMessage('Login exitoso!');
            setError('');
            navigate('/misturnos');
            window.location.reload();
        } catch (error) {
            setError('Error en el login: ' + (error.response?.data?.error || error.message));
            setMessage('');
        }
    };

    return (
        <div className="login-card">
            <h2>Iniciar Sesión</h2>
            {message && <p>{message}</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>

            <p style={{ marginTop: '1rem', textAlign: 'center' }}>
                ¿No tienes usuario?{' '}
                <Link to="/register" style={{ color: '#ffcc00', textDecoration: 'underline' }}>
                    Regístrate aquí
                </Link>
            </p>
        </div>
    );
};

export default Login;
