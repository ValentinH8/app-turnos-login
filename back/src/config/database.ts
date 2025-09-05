import { Pool } from 'pg';
import { envs } from './envs'; 

export const pool = new Pool({
  user: envs.DB_USER,           
  host: envs.DB_HOST,
  database: envs.DB_NAME,
  password: envs.DB_PASSWORD,
  port: envs.DB_PORT
});