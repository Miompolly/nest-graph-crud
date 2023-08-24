import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field } from '@nestjs/graphql';

@Entity({name:"users"})
export class UserEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column()
  firstname: string;
  @Field()
  @Column()
  lastname: string;
  @Field()
  @Column({ unique: true })
  email: string;
  @Field()
  @Column()
  password: string;
}