import { TaskDTO } from './task.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  getAll() {
    return this.tasksRepository.find();
  }

  getById(id: string) {
    return this.tasksRepository.findOne(id);
  }

  create(taskDTO: TaskDTO) {
    const task = new Task();
    task.description = taskDTO.description;
    task.completed = taskDTO.completed;

    return this.tasksRepository.save(task);
  }

  async update(id: string, taskDTO: TaskDTO) {
    await this.tasksRepository.update(id, taskDTO);

    return this.tasksRepository.findOne(id);
  }

  delete(id: string) {
    return this.tasksRepository.delete(id);
  }
}
