"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDB = exports.connection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
require("dotenv").config();
const { PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const urldata_model_1 = require("../models/urldata.model");
exports.connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    logging: false,
    models: [urldata_model_1.UrlData]
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.connection.sync();
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.connectionDB = connectionDB;
