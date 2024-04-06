type Person = {
    name:  string,
    age?: number
}

let b: string | number = 'Viktor'

const someGuy: Person = {name: b}

console.log(someGuy)