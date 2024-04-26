const lowestPrice = (array) => {
    // {productName} -> {productLowestPrice} ({townName})
    let products = [];
    array.forEach(element => {
        const [townName, productName, productPriceStr] = element.split(' | ');
        const productPrice = parseInt(productPriceStr);
        let exists = products.find(product => product.productName === productName);
        if (!exists) {
            products.push({ productName, townName, productPrice });
        }
        else if (exists.productPrice > productPrice) {
            exists.productPrice = productPrice;
            exists.productName = townName;
        }
    });
    products.forEach(product => {
        console.log(`${product.productName} -> ${product.productPrice} ${product.townName}`);
    });
};
const inputStr = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 1',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 2',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
    'Sample Town | Orange | 1'
];
lowestPrice(inputStr);
//# sourceMappingURL=product.js.map