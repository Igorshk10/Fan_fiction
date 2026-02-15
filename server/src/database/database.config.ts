import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import dotenv from 'dotenv';

dotenv.config()

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root14',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true
}