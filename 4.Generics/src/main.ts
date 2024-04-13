

const attachID = <T>(object: T) => {
    const id = Math.round(Math.random() * 1000)
    return {...object, id}

}

interface IPerson {
    name : string
}

class Person implements IPerson {
    name: string
    public _number : number
    private __age: number

    constructor(name: string, number: number = 10, age: number){
        this.name = name
        this.number = number
        this.__age = age
    }

    get number(): number {
        return this.number
    }

    set number(newValue: number){
        if (newValue > 100){
            throw Error('Error') 

        }
        this._number = newValue
    }
}

const person1 = new Person('Viktor', 89, 30)
const person1WithId = attachID<Person>(person1)
console.log(`Person ${person1WithId.name} has number: ${person1WithId.number} and ID: ${person1WithId.id}`)