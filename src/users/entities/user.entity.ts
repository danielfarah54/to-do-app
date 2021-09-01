/* eslint-disable @typescript-eslint/no-unused-vars */
import { Task } from './../../tasks/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // eslint-disable-next-line prettier/prettier
  @OneToMany(type => Task, task => task.user)
  tasks: Task[];
}
