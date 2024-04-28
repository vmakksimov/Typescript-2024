const cityTaxes = (city, population, treasury) => {
    const cityObject = {
        name: city,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            Math.floor(this.treasury += this.population * this.taxRate);
        },
        applyGrowth: function (percentage) {
            Math.floor(this.population += this.population * (percentage / 100));
        },
        applyRecession: function (percentage) {
            Math.floor(this.treasury -= this.treasury * (percentage / 100));
        },
    };
    return cityObject;
};
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(100);
console.log(city.treasury);
//# sourceMappingURL=main.js.map