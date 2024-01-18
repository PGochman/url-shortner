import { Sequelize } from "sequelize-typescript";
require("dotenv").config()

const {PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env
import { UrlData } from "../models/urldata.model";

export const connection = new Sequelize({
    dialect: "postgres",
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    logging: false,
    models: [UrlData]
})

export async function connectionDB() {
    try {
        await connection.sync()
    } catch (error) {
        console.log(error)
    }
}