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
const urldata_model_1 = require("../models/urldata.model");
function default_1({ url }) {
    return __awaiter(this, void 0, void 0, function* () {
        const urlShortened = Math.random().toString(36).substring(2, 7);
        try {
            const createdURL = yield urldata_model_1.UrlData.create({
                originalURL: url,
                shortURL: urlShortened
            });
            return createdURL;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    });
}
exports.default = default_1;
