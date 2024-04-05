const mathOperations = (num1: number, num2: number, operator: string): number => {
    switch (operator){
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
}
console.log(mathOperations(20,21, "**"));