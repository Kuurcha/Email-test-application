"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserInfoController_1 = require("./controller/UserInfoController");
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.setHeader("Content-Type", "application/json");
    next();
});
app.get("/", (req, res) => {
    res.send("This is Email Api, hi!");
});
const userInfoController = new UserInfoController_1.UserInfoController();
app.get("/find-matching-records", userInfoController.findMatchingRecords);
app.listen(port, () => {
    console.log("Server is Fire at http://localhost:" + port);
});
