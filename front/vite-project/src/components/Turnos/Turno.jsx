import React from 'react';

const Turno = ({ turno, onCancelar }) => {
    if (!turno) return <div>Error: No se recibió el turno</div>;

    return (
        <div>
            <h3>Turno #{turno.id}</h3>
            <p><strong>Fecha:</strong> {new Date(turno.date).toLocaleDateString()}</p>
            <p><strong>Hora:</strong> {turno.time}</p>
            <p><strong>Estado:</strong> {turno.status === 'active' ? 'Activo' : 'Cancelado'}</p>
            <p><strong>ID Usuario:</strong> {turno.userid}</p>
            <button disabled={turno.status === "cancelled"} onClick={onCancelar}>Cancelar Turno</button>
        </div>
    );
};


export default Turno;
