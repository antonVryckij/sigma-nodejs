import { ERROR_MESSAGE } from "./constants.js";
import * as arithmeticOperations from "./arithmeticOperations.js";
import {checkIsAllArgsNumber, convertArgsToNumbers} from "./utils.js";

export const calculate = (arithmeticOperationType, args) => {
  const argsAsNumbers = convertArgsToNumbers(args)

  const isAllArgsNumbers = checkIsAllArgsNumber(argsAsNumbers)

  if (!isAllArgsNumbers) {
    console.log(ERROR_MESSAGE.ISNT_NUMBER);
    return;
  }

  const arithmeticOperation = arithmeticOperations[arithmeticOperationType];

  if (!arithmeticOperation) {
    console.log(ERROR_MESSAGE.DONT_SUPPORT);
    return;
  }

  return arithmeticOperation(argsAsNumbers);
};
