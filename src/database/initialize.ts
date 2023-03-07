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