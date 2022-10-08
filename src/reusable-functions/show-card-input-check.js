import { validateEmail } from "./email-to-send";
import { phoneNumberError } from "./phone-number-error-check";

export const emailCheckPassed = (name, email) => {
  return name && email && validateEmail(email) ? true : false;
};

export const phoneCheckPassed = (name, email, phoneNumber) => {
  return name &&
    email &&
    validateEmail(email) &&
    phoneNumber &&
    !phoneNumberError(phoneNumber)
    ? true
    : false;
};
