import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from './users.resolver';
import { UserEntity } from './entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}