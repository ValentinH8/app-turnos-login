import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./User"; // ← Añade esta importación

@Entity({name: "Credentials"})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @OneToOne(() => User, user => user.credentials)
    user: User;
}