import { UserInfoService } from "../services/UserInfoService";
import { Request, Response } from "express";
import { ValidationError } from "../errors/ValidationError";
import { FormatHelper, UserInfo } from "shared";

export class UserInfoController {
  private userInfoService: UserInfoService;
  constructor() {
    this.userInfoService = new UserInfoService();
  }
  findMatchingRecords = async (req: Request, res: Response) => {
    try {
      const userInfoToFind: UserInfo = req.body;

      if (userInfoToFind.email && !FormatHelper.validateEmail(userInfoToFind.email))
        return res.status(400).json({ error: "Invalid email", message: "The provided email is not valid." });

      if (userInfoToFind.number && !this.userInfoService.isStringOnlyNumbers(userInfoToFind.number))
        return res.status(400).json({ error: "Invalid number", message: "Number should contain only numbers." });

      const matchingRecords = await this.userInfoService.findAllMatchingRecords(userInfoToFind);
      res.status(200).json(matchingRecords);
    } catch (error) {
      console.error(`Error during processing: ${error}`);
      if (error instanceof ValidationError) {
        res.status(400).json({ error: "Validation error", message: error.message });
      } else if (error instanceof Error) {
        res.status(500).json({ error: "Internal server error", message: "An unexpected error occurred" });
      }
    }
  };
}
