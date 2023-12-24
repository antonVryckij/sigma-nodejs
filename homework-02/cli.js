#!/usr/bin/env node

import calculate from "./index.js";

const [, , arithmeticOperationType, ...numbers] = process.argv;

const result = calculate(arithmeticOperationType, numbers);

console.log(result)
