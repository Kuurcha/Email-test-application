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
exports.JsonReader = void 0;
const promises_1 = __importDefault(require("fs/promises"));
class JsonReader {
    static parseJsonFromFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jsonString = yield promises_1.default.readFile(filePath, "utf-8");
                const parsed = JSON.parse(jsonString);
                return parsed;
            }
            catch (error) {
                if (error instanceof SyntaxError) {
                    console.error("Error parsing JSON: Invalid JSON syntax");
                }
                else if (error instanceof TypeError) {
                    console.error("Error parsing JSON: Input is not a valid string");
                }
                if (error instanceof Error) {
                    console.error("Error:", error.message);
                }
                throw error;
            }
        });
    }
}
exports.JsonReader = JsonReader;
