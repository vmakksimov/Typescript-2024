const mathOperations = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case "/":
            return num1 / num2;
        case '**':
            return num1 ** num2;
        case '%':
            return num1 % num2;
    }
};
console.log(mathOperations(20, 21, "**"));
//# sourceMappingURL=main.js.map