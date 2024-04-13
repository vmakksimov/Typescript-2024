class Departament {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
class Employee {
    constructor(name, salary, position, department, email, age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.departament = department;
        this.email = email;
        this.age = age;
    }
}
function calculateAverageSalary(departments) {
    let highestSalary = {};
    let currentHighest = {};
    for (const depart of departments) {
        depart.employees.forEach(x => {
            if (!(x.departament in currentHighest)) {
                currentHighest[x.departament] = x.salary;
            }
            else {
                currentHighest[x.departament] += x.salary;
            }
        });
    }
    const highestValue = Math.max(...Object.values(currentHighest));
    for (const dep in currentHighest) {
        if (currentHighest[dep] === highestValue) {
            highestSalary[dep] = highestValue;
            break;
        }
    }
    return highestSalary;
}
function processInput(input) {
    const departments = {};
    input.splice(1).forEach(el => {
        const splitData = el.split(' ');
        const name = splitData[0];
        const salary = parseFloat(splitData[1]);
        const position = splitData[2];
        const departament = splitData[3];
        let email = 'n/a';
        let age = -1;
        if (splitData[4]) {
            email = splitData[4];
        }
        if (splitData[5]) {
            age = parseInt(splitData[5]);
        }
        const employee = new Employee(name, salary, position, departament, email, age);
        if (!(departament in departments)) {
            departments[departament] = new Departament(departament);
            departments[departament].addEmployee(employee);
        }
        else {
            departments[departament].addEmployee(employee);
        }
    });
    const highestAverageSalaryDepartament = calculateAverageSalary(Object.values(departments));
    let finalResult;
    Object.values(departments).forEach(x => {
        if (x.name === Object.keys(highestAverageSalaryDepartament).join()) {
            finalResult = x.employees.sort((a, b) => b.salary - a.salary);
        }
    });
    printResult(finalResult);
}
function printResult(result) {
    console.log(`Highest Average Salary: ${result[0]['departament']}`);
    result.forEach(x => {
        console.log(`${x.name} ${x.salary.toFixed(2)} ${x.email} ${x.age}`);
    });
}
const inputStr = [
    "4",
    "Peter 120.00 Dev Development peter@abv.bg 28",
    "Tina 333.33 Manager Marketing 33",
    "Sam 840.20 ProjectLeader Development sam@sam.com",
    "George 0.20 Freeloader Nowhere 18"
];
processInput(inputStr);
//# sourceMappingURL=main.js.map