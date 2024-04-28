// interface Product {
//     name: string;
//     price: number;
// }

interface Product {
    productName: string
    productPrice: number
    townName: string
}

// interface Towns {
//     [key: string]: Product;
// }

const lowestPriceInCities = (cities: string[]) => {

    let products: Product[] = [];
    cities.forEach(element => {
        const [townName, productName, productPriceStr] = element.split(' | ')
        const productPrice = parseInt(productPriceStr)
 
        let exists = products.find(product => product.productName === productName)
        if (!exists){
            products.push({productName, townName, productPrice})
        } else if (exists.productPrice > productPrice) {
            exists.productPrice = productPrice
            exists.productName = townName
        }
    });
 
    products.forEach(product => {
        console.log(`${product.productName} -> ${product.productPrice} ${product.townName}`)
    })

    

 
}



const input: string[] = lowestPriceInCities(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']);