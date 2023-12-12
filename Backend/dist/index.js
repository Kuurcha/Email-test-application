"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JsonReader_1 = require("./db/JsonReader");
console.log("Test App is running...");
// Keep the application running indefinitely
setInterval(() => {
    JsonReader_1.JsonReader.parseJsonFromFile("./resources/database.json")
        .then((parsedResult) => {
        if (parsedResult) {
            console.log(parsedResult);
        }
        else {
            console.error("Parsing failed");
        }
    })
        .catch((error) => {
        console.error(`Error during parsing: ${error.message}`);
    });
}, 1000);
