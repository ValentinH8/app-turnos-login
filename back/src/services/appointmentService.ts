import { Appointment, appointments } from '../models/appointment';
import { User, users } from '../models/user';

export class AppointmentService {
  static getAllAppointments(): Appointment[] {
    return appointments;
  }

  static getAppointmentById(id: number): Appointment | undefined {
    return appointments.find(appointment => appointment.id === id);
  }

  static scheduleAppointment(appointmentData: Omit<Appointment, 'id' | 'status'>): Appointment {

    const userExists = users.some(user => user.id === appointmentData.userId);
    if (!userExists) {
      throw new Error('User not found');
    }

    const newAppointment: Appointment = {
      id: appointments.length + 1,
      ...appointmentData,
      status: 'active'
    };
    
    appointments.push(newAppointment);
    return newAppointment;
  }

  static cancelAppointment(id: number): Appointment | undefined {
    const appointment = appointments.find(app => app.id === id);
    if (appointment) {
      appointment.status = 'cancelled';
    }
    return appointment;
  }
}