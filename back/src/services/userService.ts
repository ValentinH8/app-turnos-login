import { User } from '../models/User';
import { pool } from '../config/database';

export class UserService {
  static async getAllUsers(): Promise<User[]> {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  }

  static async getUserById(id: number): Promise<User | undefined> {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async registerUser(userData: Omit<User, 'id' | 'credentialsId'>, username: string, password: string): Promise<User> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const credentialResult = await client.query(
        'INSERT INTO credentials (username, password) VALUES ($1, $2) RETURNING id',
        [username, password]
      );
      const credentialId = credentialResult.rows[0].id;
      const userResult = await client.query(
        `INSERT INTO users (name, email, birthdate, nDni, credentialsId) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [userData.name, userData.email, userData.birthdate, userData.nDni, credentialId]
      );
      await client.query('COMMIT');
      return userResult.rows[0];
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  static async loginUser(username: string, password: string): Promise<User | null> {
    const credentialResult = await pool.query(
      'SELECT id FROM credentials WHERE username = $1 AND password = $2',
      [username, password]
    );
    if (credentialResult.rows.length === 0) return null;
    const userResult = await pool.query(
      'SELECT * FROM users WHERE credentialsId = $1',
      [credentialResult.rows[0].id]
    );
    return userResult.rows[0] || null;
  }
}