import "reflect-metadata"

import { AppDataSource } from "./dataSource"

export default async function () {
    await AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
}

export async function destroy () {
    await AppDataSource.destroy().then(() => {
        console.log("Data Source destroyed!")
    })
    .catch((err) => {
        console.error("Error while destroying data source", err)
    })
}

// dangerous use carefully
export async function clearAll () {
    const entities =  AppDataSource.entityMetadatas
    const tableNames = entities.map((entity) => `"${entity.tableName}"`).join(", ");

    await AppDataSource.manager.query(`TRUNCATE ${tableNames} CASCADE;`);
}