import { ERROR_MESSAGE } from "./constants.js";

export const add = (numbers) => numbers.reduce((prevVal, currVal) => prevVal + currVal);
export const sub = (numbers) => numbers.reduce((prevVal, currVal) => prevVal - currVal);
export const mul = (numbers) => numbers.reduce((prevVal, currVal) => prevVal * currVal);
export const div = (numbers) => {
  const isAllNonZero = numbers.every(Boolean)
  if (!isAllNonZero) {
      console.log(ERROR_MESSAGE.CANT_DIVIDE_BY_ZERO);
      return;
    }
  return numbers.reduce((prevVal, currVal) => prevVal / currVal);
};
