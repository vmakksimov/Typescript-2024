const invetory = (array) => {
    const heroes = [];
    array.forEach(el => {
        let [name, level, itemsStr] = el.split(" / ");
        let finalItems = itemsStr.split(', ');
        const hero = {
            name: name,
            level: Number(level),
            items: finalItems
        };
        heroes.push(hero);
    });
    let a = Object.values(heroes).sort((a, b) => a.level - b.level);
    for (const finalHero of a) {
        console.log(`Hero: ${finalHero.name}`);
        console.log(`level => ${finalHero.level}`);
        console.log(`items => ${finalHero.items}`);
    }
};
invetory([
    'Isacc / 25 / Apple',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
//# sourceMappingURL=main.js.map