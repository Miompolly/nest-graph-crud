import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
