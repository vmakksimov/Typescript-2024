const lowestPriceInCities = (cities) => {
    const towns = {};
    for (const city of cities) {
        const [townName, productName, productPriceStr] = city.split(" | ");
        const productPrice = Number(productPriceStr);
        if (!(productName in towns) || towns[productName].price > productPrice) {
            towns[productName] = { name: townName, price: productPrice };
        }
    }
    return towns;
};
const input = lowestPriceInCities(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
for (const key in input) {
    console.log(key);
}
//# sourceMappingURL=main.js.map