const employees = (array: string[]): string => {
    let result: string = '';
    for (let index = 0; index < array.length; index++) {
        result += `Name: ${array[index]} -- Personal Number: ${array[index].length}\n`
    }

    return result.trim();
}

console.log(employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]));

// Second solution:
//  interface Employee {
//     name: string;
//     personalNumber: number;
// }

// function createEmployeeList(employeeNames: string[]): Employee[] {
//     const employees: Employee[] = [];
//     for (let name of employeeNames) {
//         const personalNumber = name.replace(/\s/g, '').length;
//         const employee: Employee = {
//             name: name,
//             personalNumber: personalNumber
//         };
//         employees.push(employee);
//     }
//     return employees;
// }

// const employeeNames: string[] = [
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ];

// const employees: Employee[] = createEmployeeList(employeeNames);

// for (let employee of employees) {
//     console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
// }