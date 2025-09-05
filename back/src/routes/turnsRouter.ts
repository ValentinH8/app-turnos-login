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
router.put("/cancel/:id", cancelAppointment);

export default router;