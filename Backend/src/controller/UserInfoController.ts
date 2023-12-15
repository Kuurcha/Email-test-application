import { UserInfoService } from "../services/UserInfoService";
import { Request, Response } from "express";
import { ValidationError } from "../errors/ValidationError";
import { UserInfo } from "shared/index";
export class UserInfoController {
  private userInfoService: UserInfoService;
  constructor() {
    this.userInfoService = new UserInfoService();
  }
  findMatchingRecords = async (req: Request, res: Response) => {
    try {
      const requestedEmail = req.query.email ? decodeURIComponent(req.query.email as string) : undefined;

      const requestedNumber = req.query.number ? decodeURIComponent(req.query.number as string) : undefined;

      const userInfoToFind: UserInfo = {
        email: requestedEmail as string,
        number: requestedNumber,
      };

      const matchingRecords = await this.userInfoService.findAllMatchingRecords(userInfoToFind);
      await new Promise((resolve) => setTimeout(resolve, 5000));
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
