import { TaskService } from './shared/task.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDTO } from './shared/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<TaskDTO[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<TaskDTO> {
    return this.taskService.getById(id);
  }

  @Post()
  async create(@Body() task: TaskDTO): Promise<TaskDTO> {
    return this.taskService.create(task);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() task: TaskDTO,
  ): Promise<TaskDTO> {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
