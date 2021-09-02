import { UserService } from './shared/user.service';
// import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from '../db/models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
