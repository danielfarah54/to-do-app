import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../db/models/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}
