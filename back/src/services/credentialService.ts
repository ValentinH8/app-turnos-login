import { Credential } from '../models/credential';
import { pool } from '../config/database';

export class CredentialService {
  static async createCredential(username: string, password: string): Promise<Credential> {
    const result = await pool.query(
      'INSERT INTO credentials (username, password) VALUES ($1, $2) RETURNING *',
      [username, password]
    );
    return result.rows[0];
  }

  static async validateCredential(username: string, password: string): Promise<number | null> {
    const result = await pool.query(
      'SELECT id FROM credentials WHERE username = $1 AND password = $2',
      [username, password]
    );
    return result.rows[0]?.id || null;
  }

  static async getCredentialById(id: number): Promise<Credential | undefined> {
    const result = await pool.query('SELECT * FROM credentials WHERE id = $1', [id]);
    return result.rows[0];
  }
}