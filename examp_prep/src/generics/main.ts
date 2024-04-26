abstract class CreateAccount<T, V>{
    bankName: T
    bankId: V

    constructor(bankName: T, bankId: V) {
        this.bankName = bankName
        this.bankId = bankId
    }

}


class PersonalAccount extends CreateAccount<string, number>{

    readonly ownerName: string
    money: number = 0
    recentTransactions: { [key: string]: number } = {}

    constructor(bankName: string, bankId: number, ownerName: string) {
        super(bankName, bankId)
        this.ownerName = ownerName
    }


    deposit(amount: number): void {
        this.money += amount
    }

    expense(amount: number, expenseType: string): void {

        if (!(expenseType in this.recentTransactions) && this.money >= amount) {
            this.recentTransactions[expenseType] = amount
        } else if (expenseType in this.recentTransactions && this.money >= amount) {
            this.recentTransactions[expenseType] += amount
        } else {
            throw new Error("You cant make {expenseType} transaction")
        }

        this.money -= amount
    }

    showDetails(): string {

        const totalFunds = Object.values(this.recentTransactions).reduce((acc, curr) => acc + curr, 0)
        let result = '';
        result = result.concat(`Bank name: ${this.bankName}\n`,
        `Bank ID: ${this.bankId}\n`,
        `Owner name: ${this.ownerName}\n`,
        `Money: ${this.money}\n`,
        `Money spent: ${totalFunds}`)

        return result;
    }



}


let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');

account.deposit(1000);

account.deposit(1000);

account.expense(700, 'Buy new phone');

account.expense(400, 'Book a vacation');

account.expense(400, 'Book a vacation');

account.expense(100, 'Buy food');

console.log(account.showDetails());