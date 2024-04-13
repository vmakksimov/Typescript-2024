const attachID = (object) => {
    const id = Math.round(Math.random() * 1000);
    return { ...object, id };
};
class Person {
    constructor(name, number = 10, age) {
        this.name = name;
        this.number = number;
        this.__age = age;
    }
    get number() {
        return this.number;
    }
    set number(newValue) {
        if (newValue > 100) {
            throw Error('Error');
        }
        this._number = newValue;
    }
}
const person1 = new Person('Viktor', 89, 30);
const person1WithId = attachID(person1);
console.log(`Person ${person1WithId.name} has number: ${person1WithId.number} and ID: ${person1WithId.id}`);
//# sourceMappingURL=main.js.map