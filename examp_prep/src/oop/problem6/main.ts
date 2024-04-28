class Trainer {
    name: string
    badges: number
    pokemons: Pokemon[] = []

    constructor(name: string, badges: number = 0) {
        this.name = name
        this.badges = badges
    }
}

class Pokemon {
    name: string
    element: string
    health: number

    constructor(name: string, element: string, health: number) {
        this.name = name
        this.element = element
        this.health = health
    }
}

const processInputP = (array: string[]) => {

    const data: Trainer[] = []
    array.forEach(element => {
        const commands = element.split(' ')


        if (commands.length > 1) {
            const trainerName = commands[0]
            const pokemonName = commands[1]
            const pokemonAbility = commands[2]
            const pokemonHealth = Number(commands[3])
            const trainer = new Trainer(trainerName)
            const pokemon = new Pokemon(pokemonName, pokemonAbility, pokemonHealth)
            let trainerExists = data.find(x => x.name === trainerName)
            if (trainerExists){
                trainerExists.pokemons.push(pokemon)
            }else{
                trainer.pokemons.push(pokemon)
                data.push(trainer)
            }

        }else if (commands[0] !== 'Tournament' && commands[0] !== 'End') {
            const command = commands[0]
            data.forEach(p => {
                let pokExists = p.pokemons.find(pok => pok.element === command)
                if (pokExists){
                    p.badges += 1
                } else {
                    p.pokemons.map(x => x.health -= 10)
                    let belowZero = p.pokemons.filter(z => z.health <= 0)
                    belowZero.forEach(k => {

                        const index = p.pokemons.indexOf(k)
                        p.pokemons.splice(index, 1)
                    })
                }
            })

           
        } 
    });

    data.sort((a, b) => b.badges - a.badges).forEach(trainer => {
        console.log(`${trainer.name} ${trainer.badges} ${trainer.pokemons.length}`)
    })
}

const inputP: string[] = [
    "Sam Blastoise Water 18",

    "Narry Pikachu Electricity 22",

    "John Kadabra Psychic 90",

    "Tournament",

    "Fire",

    "Electricity",

    "Fire",

    "End",
]

processInputP(inputP)