/// <reference path="main.ts" />

class Courier implements FoodAndBeverage.Delivery {

    protected _placesToVisit: {customerName: string, visited: boolean }[]

    constructor(placesToVisit: {customerName: string, visited: boolean }[] = []){
        this._placesToVisit = placesToVisit
    }

    newCustomer(customerName: string, visited: boolean = false): string {
        const customerExists = this._placesToVisit.find(x => x.customerName === customerName)
        
        if (customerExists){
            throw new Error(`${customerName} is already a customer of yours!.`)
        }

        this._placesToVisit.push({
            customerName,
            visited
            
        })
        return `${customerName} just became your client.`
    }

    visitCustomer(customerName: string): void {
        let customerExists = this._placesToVisit.find(x => x.customerName === customerName)
        
        if (!customerExists){
            throw new Error(`${customerName} is not your customer`)
        }

        customerExists.visited = true;
    }
    

    showCustomers(): string {
        let result = ''
        for (const customer of this._placesToVisit){
            result += `${customer.customerName} -> ${customer.visited}\n`
        }

        return result.trim()
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