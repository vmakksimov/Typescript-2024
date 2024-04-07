// input ['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']
// output { town: 'Sofia', latitude: '42.70', longitude: '23.33' } { town: 'Beijing', latitude: '39.91', longitude: '116.36' }
const printTowns = (array) => {
    let allTowns = [];
    array.forEach(el => {
        let [town, longitude, latitude] = el.split(" | ");
        longitude = Number(longitude).toFixed(2);
        latitude = Number(latitude).toFixed(2);
        const newTown = {
            town,
            latitude,
            longitude
        };
        allTowns.push(newTown);
    });
    return allTowns;
};
for (const towns of printTowns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])) {
    console.log(towns);
}
//# sourceMappingURL=main.js.map