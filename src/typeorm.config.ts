import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();
const typeOrmConfig:TypeOrmModuleOptions={
    type: 'postgres',
    host: process.env.DBHOST,
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    port: Number(process.env.PORT),
    entities: [join(__dirname, '**/*.entity{.ts,.js}')],
    synchronize: true,
}

export default typeOrmConfig;