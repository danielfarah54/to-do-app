import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

import { TaskService } from './shared/task.service';
import { TaskDTO } from './shared/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<TaskDTO[]> {
    return this.taskService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: number): Promise<TaskDTO> {
    return this.taskService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() task: TaskDTO): Promise<TaskDTO> {
    return this.taskService.create(task);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() task: TaskDTO,
  ): Promise<TaskDTO> {
    return this.taskService.update(id, task);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.taskService.delete(id);
  }
}
