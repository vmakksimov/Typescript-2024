/// <reference path="main.ts" />
class Person {
    constructor(name, age) {
        this.__name = name;
        this.__age = age;
    }
    introduction() {
        return `My name is ${this.__name} and I am ${this.__age} years old.`;
    }
    sayGoodbye(name) {
        return `Dear ${name}, it was a pleasure meeting you!`;
    }
}
let p = new Person('Ivan Ivanov', 25);
console.log(p.introduction());
console.log(p.sayGoodbye('Petar Petrov'));
//# sourceMappingURL=person.js.map