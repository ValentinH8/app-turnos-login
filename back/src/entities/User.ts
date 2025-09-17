import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({name: "users"})
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

    @OneToOne(() => Credential, credential => credential.user) 
    @JoinColumn()
    credentials!: Credential;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments!: Appointment[];
}