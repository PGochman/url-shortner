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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const urldataRouter = (0, express_1.Router)();
const createURL_controller_1 = __importDefault(require("../controllers/createURL.controller"));
const getUrl_controller_1 = __importDefault(require("../controllers/getUrl.controller"));
urldataRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.body;
    if (!url || typeof url !== "string")
        return res.status(400).json({ message: "Wrong request" });
    yield fetch(url)
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const createdURL = yield (0, createURL_controller_1.default)({ url });
            return res.json(createdURL);
        }
        catch (_a) {
            return res.status(500).send("Internal server error");
        }
    }))
        .catch((error) => {
        return res.status(404).json({ message: "Wrong domain. Try again" });
    });
}));
urldataRouter.get("/:shortUrl", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortUrl } = req.params;
    try {
        const getURLInfo = yield (0, getUrl_controller_1.default)({ shortUrl });
        return res.json(getURLInfo);
    }
    catch (_b) {
        return res.status(404).send({ message: "Couldn't find requested url" });
    }
}));
exports.default = urldataRouter;
