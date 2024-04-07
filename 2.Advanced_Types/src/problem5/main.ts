type TownPopulation = {
    [key: string]: number
}

const townPopulation = (townsArray: string[]): TownPopulation => {
    const towns: TownPopulation = {};


    townsArray.forEach(town => {
        let [townName, townPopulationStr] = town.split(' <-> ');
        const townPopulation = Number(townPopulationStr)

        if (!(townName in towns)){
            towns[townName] = townPopulation
        }else {
            towns[townName] += townPopulation
        }
    })

    return towns;


}

// console.log(townPopulation(['Sofia <-> 1200000',

// 'Montana <-> 20000',

//  'New York <-> 10000000',

//  'Washington <-> 2345000',

// 'Las Vegas <-> 1000000']))

const inputTowns: TownPopulation = townPopulation(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])


for (const town in inputTowns){
    console.log(`${town} : ${inputTowns[town]}`)
}