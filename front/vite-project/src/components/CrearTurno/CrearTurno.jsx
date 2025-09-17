import { useState } from "react";
import axios from "axios";

const CrearTurno = ({ userId, onTurnoCreado }) => {
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

        try {
            await axios.post("http://localhost:3001/turns/schedule", {
                date,
                time,
                userId,
            });

            setMessage("✅ Turno solicitado correctamente");
            setDate("");
            setTime("");
            if (onTurnoCreado) onTurnoCreado();
        } catch (err) {
            console.error("Error al crear turno:", err);
            const msg = err.response?.data?.error || "❌ Error al solicitar turno";
            setError(msg);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Fecha:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>
            <br />
            <label>
                Hora:
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Pedir Turno</button>
            <br />
            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};

export default CrearTurno;
