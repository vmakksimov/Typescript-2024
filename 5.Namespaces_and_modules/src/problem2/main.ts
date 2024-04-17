namespace FoodAndBeverage{
    export interface Delivery {
        newCustomer(customerName: string, visited: boolean): string

        visitCustomer(customerName: string): string

        showCustomers(): string
    }
}