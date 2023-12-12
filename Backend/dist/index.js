"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_module_1 = require("shared-module");
console.log("Test App is running...");
// Keep the application running indefinitely
setInterval(() => {
    const instance = new shared_module_1.SharedClass("Test message at: " + new Date());
    instance.printMessage();
}, 1000); // Log a message every second
