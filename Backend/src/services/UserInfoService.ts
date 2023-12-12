import { UserInfo } from "shared-module";
import { JsonReader } from "../db/JsonReader";

export class UserInfoService {
  jsonReader: JsonReader = new JsonReader();

  findAllMatchingRecords(userInfoToFind: UserInfo): UserInfo[] {
    JsonReader.parseJsonFromFile("./resources/database.json")
      .then((parsedResult) => {
        if (parsedResult) {
          return parsedResult.filter(
            (userInfo) =>
              userInfo.email === userInfoToFind.email &&
              (!userInfoToFind.number || (userInfo.number && userInfo.number === userInfoToFind.number))
          );
        } else {
          console.error("Parsing failed");
          throw new ValidationError("Parsing failed");
        }
      })
      .catch((error) => {
        console.error(`Error during parsing: ${error.message}`);
        throw error;
      });

    return [];
  }
}
