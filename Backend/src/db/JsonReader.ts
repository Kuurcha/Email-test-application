import { UserInfo } from "shared-module";
import fs from "fs/promises";
export class JsonReader {
  static async parseJsonFromFile(filePath: string): Promise<UserInfo[] | null> {
    try {
      const jsonString = await fs.readFile(filePath, "utf-8");
      const parsed: UserInfo[] = JSON.parse(jsonString);
      return parsed;
    } catch (error: any) {
      if (error instanceof SyntaxError) {
        console.error("Error parsing JSON: Invalid JSON syntax");
      } else if (error instanceof TypeError) {
        console.error("Error parsing JSON: Input is not a valid string");
      } else {
        console.error("Error:", error.message);
      }
      throw error;
    }
  }
}
