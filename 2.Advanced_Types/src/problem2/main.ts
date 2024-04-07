type PersonInfo = {
    firstName: string,
    lastName: string,
    age: string
}

const personInfo = (firstName: string, lastName: string, age: string): PersonInfo => {
    let object: PersonInfo = {
        firstName,
        lastName,
        age
    }
    return object

}

console.log(personInfo("Peter", "Pan", "20"))