"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedClass = void 0;
class SharedClass {
    constructor(message) {
        this.message = message;
    }
    printMessage() {
        console.log(this.message);
    }
}
exports.SharedClass = SharedClass;
