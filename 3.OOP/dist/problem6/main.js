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
function processInputStr(array) {
    const trainers = [];
    array.forEach(x => {
        const splitData = x.split(' ');
        if (splitData.length > 1) {
            const [trainerName, pokemonName, pokemonElement, pokemonHealth] = splitData;
            const pokHealt = parseInt(pokemonHealth);
            const trainer = new Trainer(trainerName);
            const pokemon = new Pokemon(pokemonName, pokemonElement, pokHealt);
            const currentName = trainer['name'];
            const nameExists = trainers.find(x => x.name === currentName);
            processTrainers(trainers, nameExists, trainerName, trainer, pokemon);
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
                        healthBelowZero(x.pokemons);
                    }
                });
            }
        }
    });
    printOutput(trainers);
}
function processTrainers(trainers, nameExists, trainerName, trainer, pokemon) {
    if (!nameExists) {
        trainers.push(trainer);
        trainer.pokemons.push(pokemon);
    }
    else {
        trainers.map(trainer => trainer.name === trainerName && trainer.pokemons.push(pokemon));
    }
}
function healthBelowZero(pokemons) {
    pokemons.forEach(k => {
        const health = k['health'];
        if (health <= 0) {
            const index = pokemons.indexOf(k);
            pokemons.splice(index, 1);
        }
    });
}
function printOutput(trainers) {
    const sortedTrainers = trainers.sort((a, b) => b.badges - a.badges);
    for (const trainer of sortedTrainers) {
        console.log(`${trainer.name} ${trainer.badges} ${trainer.pokemons.length}`);
    }
}
const inputStr1 = ['Sam Blastoise Water 18', 'Narry Pikachu Electricity 22', 'John Kadabra Psychic 90',
    'Tournament', 'Water', 'Electricity', 'Psychic', 'End'
];
processInputStr(inputStr1);
//# sourceMappingURL=main.js.map