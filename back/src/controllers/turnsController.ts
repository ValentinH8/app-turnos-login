import { Request, Response } from "express";
import { AppointmentService } from "../services/appointmentService";

export const getAllAppointments = (req: Request, res: Response) => {
  try {
    const appointments = AppointmentService.getAllAppointments();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener turnos' });
  }
};

export const getAppointmentById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const appointment = AppointmentService.getAppointmentById(Number(id));
    
    if (!appointment) {
      return res.status(404).json({ error: 'Turno no encontrado' });
    }
    
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener turno' });
  }
};

export const scheduleAppointment = (req: Request, res: Response) => {
  try {
    const { date, time, userId } = req.body;
    
    if (!date || !time || !userId) {
      return res.status(400).json({ error: 'Faltan campos requeridos: date, time, userId' });
    }

    const newAppointment = AppointmentService.scheduleAppointment({
      date: new Date(date),
      time,
      userId
    });

    res.status(201).json(newAppointment);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const cancelAppointment = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const cancelledAppointment = AppointmentService.cancelAppointment(Number(id));
    
    if (!cancelledAppointment) {
      return res.status(404).json({ error: 'Turno no encontrado' });
    }
    
    res.json({ message: 'Turno cancelado exitosamente', appointment: cancelledAppointment });
  } catch (error) {
    res.status(500).json({ error: 'Error al cancelar turno' });
  }
};