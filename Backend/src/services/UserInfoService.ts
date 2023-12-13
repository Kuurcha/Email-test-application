import { UserInfo } from "shared-module";
import { JsonReader } from "../db/JsonReader";
import { ValidationError } from "../errors/ValidationError";

import validator from "validator";

export class UserInfoService {
  jsonReader: JsonReader = new JsonReader();
  private readonly onlyNumbersRegex = /^[0-9]+$/;

  async findAllMatchingRecords(userInfoToFind: UserInfo): Promise<UserInfo[]> {
    return JsonReader.parseJsonFromFile("./resources/database.json")
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
  }

  isStringOnlyNumbers(input: string): boolean {
    return this.onlyNumbersRegex.test(input);
  }

  validateEmail(emailToVerify: string): boolean {
    return validator.isEmail(emailToVerify);
  }
}
