//GET /turns => Obtener todos los turnos
// GET /turns/:id => Obtener un turno por ID

// POST /turns/schedule => Crear un nuevo turno

//PUT /turns/cancel => Cancelar un turno existente

import { Router } from "express";
import { 
  getAllAppointments, 
  getAppointmentById, 
  scheduleAppointment, 
  cancelAppointment 
} from "../controllers/turnsController";

const router = Router();

router.get("/", getAllAppointments);
router.get("/:id", getAppointmentById);
router.post("/schedule", scheduleAppointment);
router.put("/cancel/:id", cancelAppointment);  // ✅ Cambiado para usar params

export default router;