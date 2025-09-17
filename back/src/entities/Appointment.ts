import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import { User } from "./User";


@Entity({ name: "appointments" })
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @ManyToOne(() => User, (user) => user.appointments)
    @JoinColumn({ name: "userid" })
    user: User;

    @Column({ default: "active" })
    status: string;
}