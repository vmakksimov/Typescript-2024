const aggregate = (array: number[]): void => {
    console.log(sum(array));
    console.log(inverse(array));
    console.log(concat(array));
}

const sum = (array: number[]): number => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const inverse = (array: number[]): number => {
    return array.map(element => 1 / element).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const concat = (array: number[]): number => {
    return Number(array.reduce((accumulator, currentValue) => accumulator + currentValue.toString(), ''));
}

aggregate([2, 4, 8, 16]);
