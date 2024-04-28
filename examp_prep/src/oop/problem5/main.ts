//Your task is to write a program that takes N lines of information about employees from the console and calculates the department with the highest average salary,
// and prints for each employee in that department his name, salary, email, and age - sorted by salary in descending order. 
// If an employee doesn't have an email – in place of that field, you should print "n/a" instead, if he doesn't have an age – print "-1" instead.


class Departament {
    name: string
    employees: Employee[] = []

    constructor(name: string){
        this.name = name
    }

    

}
class Employee {
    name: string
    salary: number
    position: string
    department: string
    email?: string
    age?: number

    constructor(name: string, salary: number, position: string, department: string, email?: string, age?: number) {
        this.name = name
        this.salary = salary
        this.department = department
        this.position = position
        this.email = email
        this.age = age

    }
}

const processInput = (inputData: string[]): string => {

    const departments: { [key: string]: Departament} = {}
   
    const data = inputData.slice(1)
    data.forEach(x => {
        const dataStr = x.split(' ')
        const name = dataStr[0]
        const salaryStr = dataStr[1]
        const salary = parseFloat(salaryStr)
        const position = dataStr[2]
        const department = dataStr[3]
        let email = "n/a"
        let age = -1
        if (dataStr[4]){
            email = dataStr[4]
        }
        if (dataStr[5]){
            age = parseInt(dataStr[5])
        }

        const employee = new Employee(name, salary, position, department, email, age)
        const dep = new Departament(department)
        dep.employees.push(employee)
        if (!(department in departments)){
            departments[department] = dep
        }else{
            departments[department].employees.push(employee)
        }



    })

    const highestDep = calculateAveragePrice(Object.values(departments))
   
    let result = `Highest Average Salary: ${highestDep}\n`

    Object.values(departments).forEach(x => {
        if (x.name === highestDep){
            Object.values(x.employees).sort((a, b) => b.salary - a.salary).forEach(x => {
                result += `${x.name} ${x.salary} ${x.email} ${x.age}\n`
            })
        }
       
    })

    return result.trim();
}

const calculateAveragePrice = (objects: Departament[]): string => {
    let currentHighest: number = 0
    let currentHighestName: string = ''
    objects.forEach(x => {
        let highest = x.employees.reduce((acc, curr) => acc + curr.salary, 0)
        if ((highest / x.employees.length) > currentHighest){
            currentHighest = (highest / x.employees.length)
            currentHighestName = x.name
        }
        
    })

    return currentHighestName
}

const inputData: string[] = ["6",

    "Silver 496.37 Temp Coding silver@yahoo.com",

    "Sam 610.13 Manager Sales",

    "John 609.99 Manager Sales john@abv.bg 44",

    "Venci 0.02 Director BeerDrinking beer@beer.br 23",
    "Andre 700.00 Director Coding",

    "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey"
]

console.log(processInput(inputData))