import { calculate } from "./src/calculate.js";

const [, , arithmeticOperationType, arg1, arg2] = process.argv;

const result = calculate(arithmeticOperationType, arg1, arg2);

console.log(result);
