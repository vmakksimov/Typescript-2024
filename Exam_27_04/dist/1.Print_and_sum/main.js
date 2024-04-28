const printSum = (start, end) => {
    let numbers = [];
    let totalSum = 0;
    for (let index = start; index <= end; index++) {
        totalSum += index;
        numbers.push(index);
    }
    console.log(numbers.join(' '));
    console.log(`Sum: ${totalSum}`);
};
printSum(0, 26);
//# sourceMappingURL=main.js.map