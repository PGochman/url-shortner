"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const urldata_router_1 = __importDefault(require("./urldata.router"));
const user_route_1 = __importDefault(require("./user.route"));
router.use("/shorturl", urldata_router_1.default);
router.use("/user", user_route_1.default);
exports.default = router;
