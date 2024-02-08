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
const user_model_1 = require("../models/user.model");
function createUser({ id, userName, imageUrl, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.User.findByPk(id);
            user === null || user === void 0 ? void 0 : user.update({ user_name: userName, image_url: imageUrl });
            return user;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    });
}
exports.default = createUser;
