import { DataSource } from "typeorm";
import { User } from "../entities/user"; 
import { Credential } from "../entities/Credential"; 
import { Appointment } from "../entities/Appointment"; 


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost", 
  port: 5432,
  username: "postgres",
  password: '!"#valentin',
  database: "turnos_db",
  entities: [User, Appointment, Credential  ], //[User, Credential, Appointment]
  synchronize: false,migrationsRun: true,
  logging: true,
  extra: {
    trustServerCertificate: true
  }
});