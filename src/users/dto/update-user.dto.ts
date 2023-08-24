import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto {
  @Field(() => Int)
  id?: number;

  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  lastname?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;
}
