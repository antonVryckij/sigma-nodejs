export const checkIsNumbers = (num1, num2) => {
  const isNum1Number = typeof num1 === "number" && !Number.isNaN(num1);
  const isNum2Number = typeof num2 === "number" && !Number.isNaN(num2);

  return isNum1Number && isNum2Number;
};
