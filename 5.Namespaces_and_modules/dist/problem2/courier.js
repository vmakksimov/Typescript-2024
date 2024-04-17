/// <reference path="main.ts" />
class Courier {
    constructor(placesToVisit = []) {
        this._placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        const customerExists = this._placesToVisit.find(x => x.customerName === customerName);
        if (customerExists) {
            return `${customerName} is already a customer of yours!.`;
        }
        this._placesToVisit.push({
            customerName,
            visited
        });
        return `${customerName} just became your client.`;
    }
    visitCustomer(customerName) {
        let customerExists = this._placesToVisit.find(x => x.customerName === customerName);
        if (!customerExists) {
            throw new Error(`${customerName} is not your customer`);
        }
        customerExists.visited = true;
    }
    showCustomers() {
        let result = '';
        for (const customer of this._placesToVisit) {
            result += `${customer.customerName} -> ${customer.visited}\n`;
        }
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