class Trainer {
    constructor(trainerName) {
        this.badges = 0;
        this.pokemons = [];
        this.name = trainerName;
    }
}
class Pokemon {
    constructor(pokemonName, pokemonElement, pokemonHealth) {
        this.name = pokemonName;
        this.element = pokemonElement;
        this.health = pokemonHealth;
    }
}
class Battleground {
    constructor(tName, pName, pElement, pHealth) {
        this.trainerName = tName;
        this.pokemonName = pName;
        this.pokemonElement = pElement;
        this.pokemonHealth = pHealth;
    }
}
function processInputStr(array) {
    const trainers = [];
    array.forEach(x => {
        const splitData = x.split(' ');
        if (splitData.length > 1) {
            const [trainerName, pokemonName, pokemonElement, pokemonHealth] = splitData;
            const pokHealt = parseInt(pokemonHealth);
            const trainer = new Trainer(trainerName);
            const pokemon = new Pokemon(pokemonName, pokemonElement, pokHealt);
            // const instance = new Battleground(trainer, pokemon)
            trainer.pokemons.push(pokemon);
            trainers.push(trainer);
        }
        else {
            if (splitData[0] !== 'Tournament' && splitData[0] !== 'End') {
                trainers.forEach(x => {
                    let exists = x.pokemons.find(pokemon => pokemon.element === splitData[0]);
                    if (exists) {
                        x.badges += 1;
                    }
                    else {
                        x.pokemons.map(x => x.health = x.health - 10);
                        const belowZero = healthBelowZero(x);
                    }
                });
            }
            // TODO commands
        }
    });
}
function healthBelowZero(trainer) {
    for (const pokemon in trainer.pokemons) {
        // if (pokemons[pokemon] === 'health' && pokemons[pokemon] <= 0){
        //     return true
        // }
    }
    return false;
}
const inputStr1 = ['Peter Charizard Fire 100', 'George Squirtle Water 38', 'Peter Pikachu Electricity 10',
    'Tournament', 'Fire', 'Electricity', 'End'
];
processInputStr(inputStr1);
//# sourceMappingURL=main.js.map