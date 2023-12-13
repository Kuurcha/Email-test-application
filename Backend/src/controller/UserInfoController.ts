import { UserInfo } from "shared-module";
import { UserInfoService } from "../services/UserInfoService";
import { Request, Response } from "express";
import { ValidationError } from "../errors/ValidationError";
export class UserInfoController {
  private userInfoService: UserInfoService;
  constructor() {
    this.userInfoService = new UserInfoService();
  }
  findMatchingRecords = async (req: Request, res: Response) => {
    try {
      const userInfoToFind: UserInfo = req.body;
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
