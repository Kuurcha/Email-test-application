import { JsonReader } from "./db/JsonReader";

console.log("Test App is running...");

setInterval(() => {
  JsonReader.parseJsonFromFile("./resources/database.json")
    .then((parsedResult) => {
      if (parsedResult) {
        console.log(parsedResult);
      } else {
        console.error("Parsing failed");
      }
    })
    .catch((error) => {
      console.error(`Error during parsing: ${error.message}`);
    });
}, 1000);
