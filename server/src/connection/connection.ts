import { Sequelize } from "sequelize-typescript";
require("dotenv").config()

const {PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, SUPABASE_DEPLOY} = process.env
import { UrlData } from "../models/urldata.model";
import { User } from "../models/user.model";

export const connection = new Sequelize(`${SUPABASE_DEPLOY}`, {
    models: [UrlData, User]
})

UrlData.belongsTo(User)
User.hasMany(UrlData)

export async function connectionDB() {
    try {
        await connection.sync({alter: true})
    } catch (error) {
        console.log(error)
    }
}