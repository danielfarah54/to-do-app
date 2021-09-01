/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from './../../users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;

  // eslint-disable-next-line prettier/prettier
  @ManyToOne(type => User, user => user.tasks)
  user: string;
}
