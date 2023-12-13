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
exports.UserInfoController = void 0;
const UserInfoService_1 = require("../services/UserInfoService");
const ValidationError_1 = require("../errors/ValidationError");
class UserInfoController {
    constructor() {
        this.findMatchingRecords = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userInfoToFind = req.body;
                const matchingRecords = yield this.userInfoService.findAllMatchingRecords(userInfoToFind);
                res.status(200).json(matchingRecords);
            }
            catch (error) {
                console.error(`Error during processing: ${error}`);
                if (error instanceof ValidationError_1.ValidationError) {
                    res.status(400).json({ error: "Validation error", message: error.message });
                }
                else if (error instanceof Error) {
                    res.status(500).json({ error: "Internal server error", message: "An unexpected error occurred" });
                }
            }
        });
        this.userInfoService = new UserInfoService_1.UserInfoService();
    }
}
exports.UserInfoController = UserInfoController;
