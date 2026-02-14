import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Story {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    userid: number;
    @Column()
    title: string;
    @Column()
    content: string;
    @Column()
    fandom: string;
    @Column()
    prompt: string;
    @Column()
    createdAt: Date;
}