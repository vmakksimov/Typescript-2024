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

const processInput = (inputData: string[]) => {

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

    calculateAveragePrice(Object.values(departments))
}

const calculateAveragePrice = (objects: Departament[]) => {
    const highestSalary: { [key: string]: number } = {}
    let currentHighest: number = 0
    objects.forEach(x => {
        let a= x
        let highest = x.employees.reduce((acc, curr) => acc + curr.salary, 0)
        if (highest > currentHighest){
            currentHighest = Number((highest / x.employees.length).toFixed(2))
        }
        highestSalary[x.name] = currentHighest
    })


}

const inputData: string[] = ["4",

    "Peter 120.00 Dev Development peter@abv.bg 28",

    "Tina 333.33 Manager Marketing 33",

    "Sam 840.20 ProjectLeader Development sam@sam.com",

    "George 0.20 Freeloader Nowhere 18"]

processInput(inputData)