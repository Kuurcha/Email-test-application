import { SharedClass } from "shared-module";

console.log("Test App is running...");

// Keep the application running indefinitely
setInterval(() => {
  const instance = new SharedClass("Test message at: " + new Date());
  instance.printMessage();
}, 1000); // Log a message every second
