import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "Credentials"})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;
}