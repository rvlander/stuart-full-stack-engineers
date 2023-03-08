import "reflect-metadata"
import { DataSource } from "typeorm"
import { Courier } from "./entity/Courier"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: false,
    logging: true,
    entities: [Courier],
    migrations: ["src/database/migration/*.ts"],
    migrationsRun: false,
    subscribers: [],
})