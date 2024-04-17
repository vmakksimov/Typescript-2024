/// <reference path="main.ts" />
class Courier {
    constructor(placesToVisit = []) {
        this._placesToVisit = [];
        this._placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        this._placesToVisit.forEach(x => {
            if (customerName in x) {
                return `${customerName} is already a customer of yours!.`;
            }
        });
        this._placesToVisit.push({
            customerName,
            visited
        });
        return `${customerName} just became your client.`;
    }
    visitCustomer(customerName) {
        let customerExists = this._placesToVisit.find(x => x['customerName'] === customerName);
        if (!customerExists) {
            throw new Error(`${customerName} is not your customer`);
        }
        this._placesToVisit.map(x => x['customerName'] === customerName ? x['visited'] = true : '');
        // for (const customer of this._placesToVisit){
        //     if(customer['customerName'] === customerName){
        //         customer['visited'] = true
        //     }
        // }
    }
    showCustomers() {
        let result = '';
        for (const customer of this._placesToVisit) {
            result += `${customer['customerName']} -> ${customer['visited']}\n`;
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