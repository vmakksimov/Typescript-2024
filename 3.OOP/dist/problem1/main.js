class Car {
    constructor(brand, model, horsepower) {
        this.brand = brand; // Utilizing setter
        this.model = model; // Utilizing setter
        this.horsepower = horsepower; // Utilizing setter
    }
    // Setter for brand
    set brand(brand) {
        if (brand.length === 1) {
            throw new Error("Brand must be longer than 1!");
        }
        this._brand = brand;
    }
    // Getter for brand
    get brand() {
        return this._brand;
    }
    // Setter for model
    set model(model) {
        this._model = model;
    }
    // Getter for model
    get model() {
        return this._model;
    }
    // Setter for horsepower
    set horsepower(horsepower) {
        this._horsepower = horsepower;
    }
    // Getter for horsepower
    get horsepower() {
        return this._horsepower;
    }
    // Method to print car info
    printInfo() {
        console.log(`The car is: ${this.brand} ${this.model} - ${this.horsepower} HP.`);
    }
}
// Test the program
const input = "Chevrolet Impala 390";
const [brand, model, horsepowerStr] = input.split(" ");
const horsepower = parseInt(horsepowerStr);
const car = new Car(brand, model, horsepower);
car.printInfo();
//# sourceMappingURL=main.js.map