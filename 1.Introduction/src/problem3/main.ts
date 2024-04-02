const sumOfNumbers = (n: string, m: string): number => {
    let firstNumber = Number(n);
    let secondNumber = Number(m);
    let sumOfNumbers = 0;
    for (let index = firstNumber; index <= secondNumber; index++){
      sumOfNumbers += index;
    }
    return sumOfNumbers;
}  

console.log(sumOfNumbers('-8', '20'));