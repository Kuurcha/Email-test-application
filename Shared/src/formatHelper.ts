import validator from "validator";
export class FormatHelper {
  static validateEmail(emailToVerify: string): boolean {
    return validator.isEmail(emailToVerify);
  }
}
