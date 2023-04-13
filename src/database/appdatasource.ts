import { DataSource } from "typeorm";
import { Signature } from "../models/Signature";
import Configuration from "../utils/configurations";
import { User } from "../models/User";
export const conectDb: DataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: Configuration.DbPort,
    username: "postgres",
    password: "postgrespw",
    database: Configuration.Database,
    synchronize: false,
    logging: true,
    entities: [Signature,User],
    migrations: ['src/database/migrations/*{.ts,.js}']

})