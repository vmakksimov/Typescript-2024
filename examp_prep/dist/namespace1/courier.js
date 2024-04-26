/// <reference path ="main.ts"/>
class Courier {
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        let exists = this.placesToVisit.find(cs => cs.customerName === customerName);
        if (exists) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        else {
            this.placesToVisit.push({
                customerName,
                visited
            });
            return `${customerName} just became your client.`;
        }
    }
    visitCustomer(customerName) {
        let exists = this.placesToVisit.find(cs => cs.customerName === customerName);
        if (!exists) {
            throw new Error(`${customerName} is not your customer`);
        }
        else {
            exists.visited = true;
        }
    }
    //showCustomers() – print all the customers in the following format:
    // DHL -> true
    showCustomers() {
        let result = '';
        this.placesToVisit.forEach(cs => {
            result += `${cs.customerName} -> ${cs.visited}\n`;
        });
        return result.trim();
    }
}
let courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
//# sourceMappingURL=courier.js.map