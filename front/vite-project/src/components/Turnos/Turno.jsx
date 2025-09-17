import React from 'react';
import './Turno.css';


const Turno = ({ turno, onCancelar }) => {
    if (!turno) return <div className="error">Error: No se recibió el turno</div>;

    return (
        <div className="turno-card">
            <h3 className="turno-title">Turno #{turno.id}</h3>
            <p className="turno-info"><strong>Fecha:</strong> {new Date(turno.date).toLocaleDateString()}</p>
            <p className="turno-info"><strong>Hora:</strong> {turno.time}</p>
            <p className="turno-info"><strong>Estado:</strong> {turno.status === 'active' ? 'Activo' : 'Cancelado'}</p>
            <p className="turno-info"><strong>ID Usuario:</strong> {turno.userid}</p>
            <button
                className="turno-button"
                disabled={turno.status === "cancelled"}
                onClick={onCancelar}
            >
                Cancelar Turno
            </button>
        </div>
    );
};

export default Turno;
