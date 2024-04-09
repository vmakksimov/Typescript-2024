const invetory = (array) => {
    const heroes = [];
    array.forEach(el => {
        let [name, level, itemsStr] = el.split(" / ");
        // let items = itemsStr.split(", ")
        const hero = {
            name: name,
            level: Number(level),
            items: itemsStr
        };
    });
    return heroes;
};
console.log(invetory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));
//# sourceMappingURL=main.js.map