interface Hero {
    name: string,
    level: number,
    items: string
}

const invetory = (array: string[]) => {
    const heroes: Hero[] = [];

    array.forEach(el => {
        let [name, level, itemsStr] = el.split(" / ")
        const hero: Hero = {
            name: name,
            level: Number(level),
            items: itemsStr
        }
        heroes.push(hero);
    })

    let a = Object.values(heroes).sort((a: Hero, b: Hero) => a.level - b.level)

    for (const finalHero of a){
        console.log(`Hero: ${finalHero.name}`)
        console.log(`level => ${finalHero.level}`)
        console.log(`items => ${finalHero.items}`)
    }
}


invetory([

    'Isacc / 25 / Apple',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])

