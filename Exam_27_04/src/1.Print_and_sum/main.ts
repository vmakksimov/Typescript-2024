const printSum = (start: number, end: number): void => {
    let numbers: number[] = []
    let totalSum: number = 0;
    for (let index = start; index <= end; index++) {
        totalSum += index
        numbers.push(index)
    }

    console.log(numbers.join(' '))

    console.log(`Sum: ${totalSum}`);

}

printSum(0, 26)