import { DataSource } from "typeorm";
import { Signature } from "../models/Signature";
import Configuration from "../utils/configurations";
export const conectDb = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: Configuration.DbPort,
    username: "postgres",
    password: "postgrespw",
    database: Configuration.Database,
    synchronize: false,
    logging: true,
    entities: [Signature],
    migrations: ['src/database/migrations/*{.ts,.js}']

})