
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserDto {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface UpdateUserDto {
    id: number;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface IQuery {
    index(): string | Promise<string>;
    user(): User[] | Promise<User[]>;
    userById(id: number): User | Promise<User>;
    activeUsers(): User[] | Promise<User[]>;
}

export interface IMutation {
    createUser(createUserDto: CreateUserDto): User | Promise<User>;
    updateUser(id: number, updateUserDto: UpdateUserDto): User | Promise<User>;
    deleteUser(id: number): User | Promise<User>;
}

type Nullable<T> = T | null;
