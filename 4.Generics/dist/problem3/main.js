class CarDealership {
    constructor(dealerName, soldCars = 0) {
        this.modelSold = {};
        this.dealershipName = dealerName;
        this.soldCars = soldCars;
    }
    // add the dealerID as a key and the model as value in the modelsSold object and increase the soldCars by 1;
    sellCar(dealerID, model) {
        this.modelSold[dealerID.toString()] = model;
        return this.soldCars++;
    }
    showDetails() {
        let result = `${this.dealershipName}\n`;
        for (const car in this.modelSold) {
            result += `${car} sold ${this.modelSold[car]}\n`;
        }
        // BG01 sold C Class
        return result.trim();
    }
}
let dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
//# sourceMappingURL=main.js.map