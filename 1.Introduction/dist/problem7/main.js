const biggerHalf = (array) => {
    array.sort((a, b) => a - b);
    if (array.length % 2 === 0) {
        return array.slice(array.length / 2);
    }
    else {
        return array.slice(Math.floor(array.length / 2));
    }
};
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6, 12, 14]));
//# sourceMappingURL=main.js.map