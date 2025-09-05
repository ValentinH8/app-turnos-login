import { AppointmentService } from "../services/appointmentService";
import { Request, Response } from "express";
export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await AppointmentService.getAllAppointments();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener turnos' });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const appointment = await AppointmentService.getAppointmentById(Number(id));
    if (!appointment) return res.status(404).json({ error: 'Turno no encontrado' });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener turno' });
  }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
  try {
    const { date, time, userId } = req.body;
    if (!date || !time || !userId) {
      return res.status(400).json({ error: 'Faltan campos requeridos: date, time, userId' });
    }
    const newAppointment = await AppointmentService.scheduleAppointment({
      date: new Date(date),
      time,
      userId
    });
    res.status(201).json(newAppointment);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cancelledAppointment = await AppointmentService.cancelAppointment(Number(id));
    if (!cancelledAppointment) return res.status(404).json({ error: 'Turno no encontrado' });
    res.json({ message: 'Turno cancelado exitosamente', appointment: cancelledAppointment });
  } catch (error) {
    res.status(500).json({ error: 'Error al cancelar turno' });
  }
};