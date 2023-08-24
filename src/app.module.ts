import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import typeOrmConfig from './typeorm.config'; 
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TypeOrmModule.forRoot(typeOrmConfig), 
    UsersModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}




