import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { RepoService } from './../repo/repo.service';
import { Task } from './../db/models/task.entity';
import TaskInput from './input/task.input';
import { User } from './../db/models/user.entity';

@Resolver(() => Task)
export default class TaskResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Task])
  public async getTasksFromUser(
    @Args('userId') userId: number,
  ): Promise<Task[]> {
    return this.repoService.taskRepo.find({ userId });
  }
  @Query(() => Task, { nullable: true })
  public async getTask(@Args('taskId') taskId: number): Promise<Task> {
    return this.repoService.taskRepo.findOne(taskId);
  }

  @Mutation(() => Task)
  public async createTask(@Args('data') input: TaskInput): Promise<Task> {
    if (!input.userId) {
      throw new Error('Errorrrr');
    }
    const task = this.repoService.taskRepo.create();
    task.userId = input.userId;
    task.description = input.description;
    task.completed = input.completed;
    return this.repoService.taskRepo.save(task);
  }

  @ResolveField(() => User, { name: 'user' })
  public async getUser(@Parent() parent: Task): Promise<User> {
    return this.repoService.userRepo.findOne(parent.userId);
  }
}
