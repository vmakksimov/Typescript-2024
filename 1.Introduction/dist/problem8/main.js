class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
const createCats = (cats) => {
    let catsObjects = [];
    for (let index = 0; index < cats.length; index++) {
        let [name, age] = cats[index].split(' ');
        let cat = new Cat(name, age);
        catsObjects.push(cat);
    }
    return catsObjects;
};
const catStrings = ['Mellow 2', 'Tom 5'];
const cats = createCats(catStrings);
for (let cat of cats) {
    cat.meow();
}
//# sourceMappingURL=main.js.map