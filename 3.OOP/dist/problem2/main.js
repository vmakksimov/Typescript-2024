class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
const inputPerson = "Peter 12";
const [personName, personAge] = inputPerson.split(' ');
const age = parseInt(personAge);
const person = new Person(personName, age);
person.printInfo();
//# sourceMappingURL=main.js.map