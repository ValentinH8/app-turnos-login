import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
    import { User } from "./user";

    @Entity({name: "appointments"})
    export class Appointment {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        date: Date;

        @Column()
        time: string;

        @ManyToOne(() => User, (user) => user.appointments)
        user: User;

        @Column({ default: "active" })
        status: string;
    }