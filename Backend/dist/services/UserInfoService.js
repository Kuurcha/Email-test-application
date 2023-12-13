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
exports.UserInfoService = void 0;
const JsonReader_1 = require("../db/JsonReader");
const ValidationError_1 = require("../errors/ValidationError");
const validator_1 = __importDefault(require("validator"));
class UserInfoService {
    constructor() {
        this.jsonReader = new JsonReader_1.JsonReader();
        this.onlyNumbersRegex = /^[0-9]+$/;
    }
    findAllMatchingRecords(userInfoToFind) {
        return __awaiter(this, void 0, void 0, function* () {
            return JsonReader_1.JsonReader.parseJsonFromFile("./resources/database.json")
                .then((parsedResult) => {
                if (parsedResult) {
                    return parsedResult.filter((userInfo) => userInfo.email === userInfoToFind.email &&
                        (!userInfoToFind.number || (userInfo.number && userInfo.number === userInfoToFind.number)));
                }
                else {
                    console.error("Parsing failed");
                    throw new ValidationError_1.ValidationError("Parsing failed");
                }
            })
                .catch((error) => {
                console.error(`Error during parsing: ${error.message}`);
                throw error;
            });
        });
    }
    isStringOnlyNumbers(input) {
        return this.onlyNumbersRegex.test(input);
    }
    validateEmail(emailToVerify) {
        return validator_1.default.isEmail(emailToVerify);
    }
}
exports.UserInfoService = UserInfoService;
