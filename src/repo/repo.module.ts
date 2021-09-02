import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RepoService } from './repo.service';
import { Task } from './../db/models/task.entity';
import { User } from './../db/models/user.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Task])],
  providers: [RepoService],
  exports: [RepoService],
})
export class RepoModule {}
