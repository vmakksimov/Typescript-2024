


class Trainer {
    name: string
    badges: number = 0
    pokemons: Pokemon[] = []

    constructor(trainerName: string) {
        this.name = trainerName
    }
}

class Pokemon {
    name: string
    element: string
    health: number

    constructor(pokemonName: string, pokemonElement: string, pokemonHealth: number) {
        this.name = pokemonName
        this.element = pokemonElement
        this.health = pokemonHealth
    }


}

interface IBattleground{
    trainerName: string
    pokemonName: string
    pokemonElement: string
    pokemonHealth: number
}

class Battleground implements IBattleground {
    trainerName: string;
    pokemonName: string;
    pokemonElement: string;
    pokemonHealth: number;
   

    constructor(tName: string, pName: string, pElement: string, pHealth: number){
        this.trainerName = tName
        this.pokemonName = pName
        this.pokemonElement = pElement
        this.pokemonHealth = pHealth
        
    }

}

function processInputStr(array: string[]): void{
    
    const trainers: Trainer[] = []
    array.forEach(x => {
        const splitData = x.split(' ')
        
        if (splitData.length > 1){
            const [trainerName, pokemonName, pokemonElement, pokemonHealth] = splitData
            const pokHealt = parseInt(pokemonHealth)
            const trainer = new Trainer(trainerName)
            const pokemon = new Pokemon(pokemonName, pokemonElement, pokHealt)
            // const instance = new Battleground(trainer, pokemon)
            trainer.pokemons.push(pokemon)
            trainers.push(trainer)


        } else {

            if (splitData[0] !== 'Tournament' && splitData[0] !== 'End'){
                trainers.forEach(x => {
                    let exists = x.pokemons.find(pokemon => pokemon.element === splitData[0])
                    if (exists){
                        x.badges += 1
                    } else {
                        x.pokemons.map(x => x.health = x.health - 10)
                        const belowZero = healthBelowZero(x.pokemons)
                    }
                })  
            } 
            // TODO commands
          
        }
    })



}

function healthBelowZero(pokemons: object[]){
    for (const pokemon of pokemons){
        let a = pokemon;
        // if (pokemons[pokemon] === 'health' && pokemons[pokemon] <= 0){
        //     return true
        // }
    }

    return false;
}


const inputStr1: string[] = [ 'Peter Charizard Fire 100', 'George Squirtle Water 38', 'Peter Pikachu Electricity 10',
    'Tournament', 'Fire', 'Electricity','End'
]

processInputStr(inputStr1)

