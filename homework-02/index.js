import { calculate } from "./src/calculate.js";

const [, , arithmeticOperationType, ...args] = process.argv;

const result = calculate(arithmeticOperationType, args);

console.log(result);
