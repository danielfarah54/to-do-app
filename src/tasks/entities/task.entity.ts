import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;
}
