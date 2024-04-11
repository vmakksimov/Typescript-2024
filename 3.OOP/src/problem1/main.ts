class Car {
    public _brand: string;
    public _model: string;
    public _horsepower: number;

    constructor(brand: string, model: string, horsepower: number) {
        this.brand = brand; // Utilizing setter
        this.model = model; // Utilizing setter
        this.horsepower = horsepower; // Utilizing setter
    }

    // Setter for brand
    set brand(newValue: string) {
        if (newValue.length === 1) {
            throw new Error("Brand must be longer than 1!");
        }
        this._brand = newValue
    }

    // Getter for brand
    get brand(): string {
        return this.brand;
    }

    // Setter for model
    set model(model: string) {
        this._model = model;
    }

    // Getter for model
    get model(): string {
        return this._model;
    }

    // Setter for horsepower
    set horsepower(horsepower: number) {
        this._horsepower = horsepower;
    }

    // Getter for horsepower
    get horsepower(): number {
        return this._horsepower;
    }

    // Method to print car info
    printInfo(): void {
        console.log(`The car is: ${this.brand} ${this.model} - ${this.horsepower} HP.`);
    }
}

// Test the program
const input: string = "Chevrolet Impala 390";
const [brand, model, horsepowerStr] = input.split(" ");
const horsepower: number = parseInt(horsepowerStr);

const car = new Car(brand, model, horsepower);
// car.printInfo();
console.log(car.brand)
console.log(car._brand)
