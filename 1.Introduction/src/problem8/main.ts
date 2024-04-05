class Cat {
    name: string
    age: string

    constructor(name: string, age: string) {
        this.name = name
        this.age = age
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }

}

const createCats = (cats: string[]): Cat[] => {
    let catsObjects: Cat[] = [];
    for (let index = 0; index < cats.length; index++) {
        let [name, age] = cats[index].split(' ')
        let cat = new Cat(name, age)
        catsObjects.push(cat)
    }
    return catsObjects;
}

const catStrings: string[] = ['Mellow 2', 'Tom 5'];
const cats: Cat[] = createCats(catStrings);

for (let cat of cats) {
    cat.meow();
}

