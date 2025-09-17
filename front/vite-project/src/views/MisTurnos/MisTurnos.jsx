import { useState, useEffect } from "react";
import axios from "axios";
import Turno from "../../components/Turnos/Turno";
import ImagenesSlider from "../../components/imagenes/imagenes.jsx";
import CrearTurno from "../../components/CrearTurno/CrearTurno";

const MisTurnos = () => {
  const [turnosState, setTurnosState] = useState([]);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.user?.id;

  const fetchTurnos = async () => {
    try {
      const res = await axios.get("http://localhost:3001/turns/");
      // Filtramos para que muestre solo turnos del usuario y que no estén cancelados
      const userTurnos = res.data.filter(
        (turno) => turno.userid === userId && turno.status !== "cancelled"
      );
      setTurnosState(userTurnos);
    } catch (error) {
      console.log("Error al cargar turnos:", error);
    }
  };

  const cancelarTurno = async (id) => {
    try {
      await axios.put(`http://localhost:3001/turns/cancel/${id}`);
      fetchTurnos();
    } catch (error) {
      console.error("Error al cancelar turno", error);
    }
  };

  useEffect(() => {
    fetchTurnos();
  }, []);

  return (
    <div>
      <ImagenesSlider />
      <CrearTurno userId={userId} onTurnoCreado={fetchTurnos} />
      {turnosState.length > 0 ? (
        turnosState.map((turno) => (
          <Turno key={turno.id} turno={turno} onCancelar={() => cancelarTurno(turno.id)} />
        ))
      ) : (
        <p>No tenés turnos activos.</p>
      )}
    </div>
  );
};

export default MisTurnos;
