import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RepoModule } from './repo/repo.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import UserResolver from './resolvers/user.resolver';
import TaskResolver from './resolvers/task.resolver';
import * as ormOptions from 'ormconfig';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const graphQLImports = [UserResolver, TaskResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    TasksModule,
    UsersModule,
    ConfigModule.forRoot(),
    AuthModule,
    RepoModule,
    ...graphQLImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
