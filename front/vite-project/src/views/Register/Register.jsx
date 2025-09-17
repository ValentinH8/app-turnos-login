import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        birthdate: '',
        nDni: ''
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

        const camposFaltantes = Object.keys(formData).filter(key => !formData[key]);
        if (camposFaltantes.length > 0) {
            setError('Todos los campos son obligatorios');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/users/register', formData);
            setMessage('Usuario registrado exitosamente!');
            setError('');

            setFormData({
                name: '',
                email: '',
                username: '',
                password: '',
                birthdate: '',
                nDni: ''
            });

            navigate('/login');

        } catch (error) {
            if (error.response?.status === 400) {
                const errorMsg = error.response.data.error;
                setError(errorMsg);
            } else {
                setError('Error en el registro: ' + (error.response?.data?.error || error.message));
            }
            setMessage('');
        }
    };

    return (
        <div className="login-card">
            <h2>Registrarse</h2>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
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
                <input
                    type="date"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="nDni"
                    placeholder="Número de DNI"
                    value={formData.nDni}
                    onChange={handleChange}
                    required
                />
                <button type="submit">
                    Registrarse
                </button>
            </form>

            <p style={{ marginTop: '1rem', textAlign: 'center' }}>
                ¿Ya tienes usuario?{' '}
                <Link to="/login" style={{ color: '#ffcc00', textDecoration: 'underline' }}>
                    Inicia sesión aquí
                </Link>
            </p>
        </div>
    );
};

export default Register;
