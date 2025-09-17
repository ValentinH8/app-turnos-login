import { useState } from "react";
import axios from "axios";
import './CrearTurno.css';

const CrearTurnoPage = ({ userId, onTurnoCreado }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!date || !time || !userId) {
      setError("Faltan campos: fecha, hora o usuario");
      return;
    }

    const [year, month, day] = date.split("-").map(Number);
    const [hours, minutes] = time.split(":").map(Number);
    const turnoDateTime = new Date(year, month - 1, day, hours, minutes);
    const ahora = new Date();

    if (turnoDateTime < ahora) {
      setError("No se puede pedir un turno en el pasado");
      return;
    }

    const diaSemana = turnoDateTime.getDay();
    if (diaSemana === 0 || diaSemana === 6) {
      setError("El establecimiento no abre los fines de semana");
      return;
    }

    if (hours < 9 || hours > 17 || (hours === 17 && minutes > 0)) {
      setError("El establecimiento no atiende fuera del horario de 09:00 a 17:00 hs");
      return;
    }

    try {
      await axios.post("http://localhost:3001/turns/schedule", {
        date,
        time,
        userId,
      });
      setMessage("Turno solicitado correctamente");
      setDate("");
      setTime("");
      if (onTurnoCreado) onTurnoCreado();
    } catch (err) {
      const msg = err.response?.data?.error || "Error al solicitar turno";
      setError(msg);
    }
  };

  return (
    <div className="crear-turno-container">
      <h2 className="title">Crear turno</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Fecha:
          <input
            className="input"
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={e => setDate(e.target.value)}
          />
        </label>
        <label className="label">
          Hora:
          <input
            className="input"
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </label>
        <button className="button" type="submit">Pedir Turno</button>
      </form>
      {message && <p className="message success">{message}</p>}
      {error && <p className="message error">{error}</p>}
    </div>
  );
};

export default CrearTurnoPage;
