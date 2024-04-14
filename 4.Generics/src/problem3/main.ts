interface Dealership<T>{
    dealershipName: T
    soldCars: number
}

interface Actions<T>{
    data: T
    sellCar(dealerID: T , model: T): number
}

interface DealershipActions<T> extends Dealership<T>, Actions<T> {}

class CarDealership<T> implements DealershipActions<T> {
    dealershipName: T
    soldCars: number
    data: T
    modelSold: {[key: string] : T} = {}

    constructor(dealerName: T, soldCars: number = 0){
        this.dealershipName = dealerName
        this.soldCars = soldCars

    }

    // add the dealerID as a key and the model as value in the modelsSold object and increase the soldCars by 1;

    sellCar(dealerID: T, model: T): number{
        this.modelSold[dealerID.toString()] = model

        return this.soldCars++
    }

    showDetails(): string{
        let result = `${this.dealershipName}:\n`;

        for (const car in this.modelSold){
            result += `${car} sold ${this.modelSold[car]}\n`
        }

        // BG01 sold C Class
        return result.trim()
    }
}

let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');

dealership.sellCar('BG02', 'S Class');

dealership.sellCar('BG03', 'ML Class');

dealership.sellCar('BG04', 'CLK Class');

console.log(dealership.showDetails())