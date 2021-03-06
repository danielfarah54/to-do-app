import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { RepoService } from './../repo/repo.service';
import { User } from './../db/models/user.entity';
import UserInput from './input/user.input';

@Resolver(() => User)
export default class UserResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this.repoService.userRepo.find();
  }
  @Query(() => User, { nullable: true })
  public async getUser(@Args('id') id: number): Promise<User> {
    return this.repoService.userRepo.findOne(id);
  }

  @Mutation(() => User)
  public async createUser(@Args('data') input: UserInput): Promise<User> {
    const user = this.repoService.userRepo.create({
      name: input.name,
      email: input.email,
      password: input.password,
    });
    return this.repoService.userRepo.save(user);
  }

  @Mutation(() => User)
  public async updateUser(
    @Args('data') input: UserInput,
    @Args('id') id: number,
  ): Promise<User> {
    this.repoService.userRepo.update(id, {
      name: input.name,
      email: input.email,
      password: input.password,
    });
    return this.repoService.userRepo.findOne(id);
  }
}
