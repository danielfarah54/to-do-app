import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class TaskInput {
  @Field()
  readonly description: string;

  @Field()
  readonly completed: boolean;

  @Field()
  readonly userId: number;
}
