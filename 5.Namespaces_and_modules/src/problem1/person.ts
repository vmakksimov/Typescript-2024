
/// <reference path="main.ts" />

class Person implements Greeter.Greeting<string> {

    private __name: string
    private __age: number

    constructor(name: string, age: number){
        this.__name = name
        this.__age = age
    }

    introduction(): string {
        return `My name is ${this.__name} and I am ${this.__age} years old.`
    }


    sayGoodbye(name: string): string {
        return `Dear ${name}, it was a pleasure meeting you!`
    }
}


let p = new Person('Ivan Ivanov', 25);
console.log(p.introduction());
console.log(p.sayGoodbye('Petar Petrov'));