const aggregate = (array) => {
    console.log(sum(array));
    console.log(inverse(array));
    console.log(concat(array));
};
const sum = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
const inverse = (array) => {
    return array.map(element => 1 / element).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
const concat = (array) => {
    return Number(array.reduce((accumulator, currentValue) => accumulator + currentValue.toString(), ''));
};
aggregate([2, 4, 8, 16]);
//# sourceMappingURL=main.js.map