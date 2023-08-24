
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';


@Resolver(()=>User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User, { name: 'createUser' })
    async createUser(@Args('createUserDto') createUserDto: CreateUserDto) {
      return this.usersService.create(createUserDto);
    }
    @Query(() => [User],{name:'user'})
    async users() {
      return this.usersService.findAll();
    }
    
    @Query(() => User, { name: 'userById' })
    async user(@Args('id', { type: () => Int }) id: number) {
      return this.usersService.findOne(id);
    }
    
    @Query(() => [User])
    async activeUsers() {
      return this.usersService.findActiveUsers();
    }


    @Mutation(() => User, { name: 'updateUser' })
async updateUser(
  @Args('id', { type: () => Int }) id: number,
  @Args('updateUserDto') updateUserDto: UpdateUserDto,
) {
  return this.usersService.update(id, updateUserDto);
}

@Mutation(() => User, { name: 'deleteUser' })
async removeUser(@Args('id', { type: () => Int }) id: number) {
  return this.usersService.remove(id);
}

}
