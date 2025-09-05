import 'dotenv/config';

export const envs = {
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 3001,
  DB_USER: process.env.DB_USER || 'postgres',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_NAME: process.env.DB_NAME || 'turnos_db',
  DB_PASSWORD: process.env.DB_PASSWORD || '!"#valentin',
  DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432
};