interface City {
    name: string
    population: number
    treasury: number
    taxRate: number
    collectTaxes(): void
    applyGrowth(percentage: number): void
    applyRecession(percentage: number): void
}


const cityTaxes = (city: string, population: number, treasury: number): City => {
    const cityObject: City = {
        name: city,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function (): void {
            Math.floor(this.treasury += this.population * this.taxRate)
        },
        applyGrowth: function (percentage: number): void {
            Math.floor(this.population += this.population * (percentage / 100))
        },
        applyRecession: function (percentage: number): void {
            Math.floor(this.treasury -= this.treasury * (percentage / 100))
        },

    }

    return cityObject;
}



const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(100);
console.log(city.treasury)

