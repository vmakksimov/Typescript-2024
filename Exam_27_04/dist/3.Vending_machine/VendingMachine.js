"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        let exist = this.drinks.find(drink => drink.name === name);
        if (exist) {
            const indexDrink = this.drinks.indexOf(exist);
            this.drinks.splice(indexDrink, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        if (this.drinks.length > 0) {
            let largestDrink = 0;
            this.drinks.forEach(drink => {
                if (drink.volume > largestDrink) {
                    largestDrink = drink.volume;
                }
            });
            const findLargest = this.drinks.find(x => x.volume === largestDrink);
            return findLargest.toString();
        }
        return 'No drinks available.';
    }
    getCheapest() {
        if (this.drinks.length > 0) {
            let lowestValue = [];
            this.drinks.forEach(drink => {
                lowestValue.push(drink.price);
            });
            const findLowestValueDrink = this.drinks.find(x => x.price === Math.min(...lowestValue));
            return findLowestValueDrink.toString();
        }
        return 'No drinks available.';
    }
    buyDrink(name) {
        if (this.drinks.length > 0) {
            const drink = this.drinks.find(drink => drink.name === name);
            return drink.toString();
        }
        return 'No drinks available.';
    }
    get getCount() {
        return this.drinks.length;
    }
    report() {
        if (this.drinks.length > 0) {
            let result = 'Drinks available:\n';
            this.drinks.forEach(drink => {
                result = result.concat(drink.toString() + '\n');
            });
            return result.trim();
        }
        return 'No drinks available.';
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map