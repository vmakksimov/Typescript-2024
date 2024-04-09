interface Items{
    name: string
}

interface Hero {
    name: string,
    level: number,
    items: Items
}

const invetory = (array: string[]) => {

    const heroes: Hero[] = []

    array.forEach(el => {
        let [name, level, itemsStr] = el.split(" / ")
        // let items = itemsStr.split(", ")
        const hero: Hero = {
            name: name,
            level: Number(level),
            items: itemsStr
        }
    })

    return heroes;
}

console.log(invetory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]))