import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './../db/models/task.entity';
import { User } from './../db/models/user.entity';

@Injectable()
export class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Task) public readonly taskRepo: Repository<Task>,
  ) {}
}
