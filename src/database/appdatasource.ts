import { DataSource } from "typeorm";
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
    entities: [],
    migrations: ['src/database/migrations/*{.ts,.js}']

})