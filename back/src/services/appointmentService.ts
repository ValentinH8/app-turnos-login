import { Appointment } from '../models/Appointment';
import { pool } from '../config/database';

export class AppointmentService {
  static async getAllAppointments(): Promise<Appointment[]> {
    const result = await pool.query('SELECT * FROM appointments');
    return result.rows;
  }

  static async getAppointmentById(id: number): Promise<Appointment | undefined> {
    const result = await pool.query('SELECT * FROM appointments WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async scheduleAppointment(appointmentData: Omit<Appointment, 'id' | 'status'>): Promise<Appointment> {
    const result = await pool.query(
      `INSERT INTO appointments (date, time, userId, status) VALUES ($1, $2, $3, 'active') RETURNING *`,
      [appointmentData.date, appointmentData.time, appointmentData.userId]
    );
    return result.rows[0];
  }

  static async cancelAppointment(id: number): Promise<Appointment | undefined> {
    const result = await pool.query(
      'UPDATE appointments SET status = $1 WHERE id = $2 RETURNING *',
      ['cancelled', id]
    );
    return result.rows[0];
  }
}