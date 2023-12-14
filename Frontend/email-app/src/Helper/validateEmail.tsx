import validator from "validator";

export function validateEmail(emailToVerify: string): boolean {
  return validator.isEmail(emailToVerify);
}
