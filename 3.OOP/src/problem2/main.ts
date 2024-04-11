class Person {
    public name: string
    public age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    printInfo(){
        console.log(`${this.name} is ${this.age} years old.`)
    }
}

const inputPerson: string = "Peter 12"
const [personName, personAge] = inputPerson.split(' ')
const age: number = parseInt(personAge);
const person = new Person(personName, age)
person.printInfo()
