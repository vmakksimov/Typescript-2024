type Person = {
    name:  string,
    age?: number
}


interface Person3 {
    billingAddress: string,
    paymentMethod: string
}

interface Person2 {
    name: string,
    age: number
}

class Cat implements Person2 {
    name = 'Aya'
    age = 1

    constructor (name: string, age: number){
        this.name = name
        this.age = age
        
    }
}
let b: string | number = 'Viktor'

const someGuy: Person = {name: b}

console.log(someGuy)