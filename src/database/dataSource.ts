import "reflect-metadata";
import { DataSource } from "typeorm";
import { Courier } from "./entity/Courier";
import { database } from "src/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  ...database,
  synchronize: false,
  logging: false,
  entities: [Courier],
  migrations: ["src/database/migration/*.ts"],
  migrationsRun: false,
  subscribers: [],
});
