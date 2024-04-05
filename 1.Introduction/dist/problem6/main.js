const evenElements = (array) => {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (index % 2 === 0) {
            result.push(array[index]);
        }
    }
    return result.join(' ');
};
console.log(evenElements(['5', '10']));
//# sourceMappingURL=main.js.map