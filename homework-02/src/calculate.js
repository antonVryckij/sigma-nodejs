import { ERROR_MESSAGE } from "./constants.js";
import * as arithmeticOperations from "./arithmeticOperations.js";
import { checkIsNumbers } from "./utils.js";

export const calculate = (arithmeticOperationType, arg1, arg2) => {
  const num1 = Number(arg1);
  const num2 = Number(arg2);

  const isNumbers = checkIsNumbers(num1, num2);

  if (!isNumbers) {
    console.log(ERROR_MESSAGE.ISNT_NUMBER);
    return;
  }

  const arithmeticOperation = arithmeticOperations[arithmeticOperationType];

  if (!arithmeticOperation) {
    console.log(ERROR_MESSAGE.DONT_SUPPORT);
    return;
  }

  return arithmeticOperation(num1, num2);
};
