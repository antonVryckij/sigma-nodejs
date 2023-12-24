export const convertArgsToNumbers = (args) => args.map(Number);

export const checkIsAllArgsNumber = (numbers) => numbers.every((number) => typeof number === "number" && !Number.isNaN(number))
