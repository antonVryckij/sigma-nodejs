import { ERROR_MESSAGE } from "./constants.js";

export const add = (num1, num2) => num1 + num2;
export const sub = (num1, num2) => num1 - num2;
export const mul = (num1, num2) => num1 * num2;
export const div = (num1, num2) => {
  if (!num1 || !num2) {
    console.log(ERROR_MESSAGE.CANT_DIVIDE_BY_ZERO);
    return;
  }
  return num1 / num2;
};
