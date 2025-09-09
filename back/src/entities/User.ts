import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Credential } from "./Credential"; // Importar Credential con mayúscula
import { Appointment } from "./Appointment"; // Importar Appointment con mayúscula


@Entity( {name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    birthdate!: Date;

    @Column()
    nDni!: string;

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials!: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments!: Appointment[];
}