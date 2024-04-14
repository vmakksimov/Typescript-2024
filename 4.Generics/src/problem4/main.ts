
abstract class CreateAccount<T, V>{
    bankName: T
    bankID: V

    constructor( bankName: T, bankID: V){
        this.bankID = bankID
        this.bankName = bankName
    }
}

class PersonalAccount extends CreateAccount<string, number>{
    readonly ownerName: string
    public money: number = 0
    public recentTransactions: { [key: string]: number } = {}
  
    constructor(bankName: string, bankID: number, ownerName: string, ) {
        super(bankName, bankID)
        this.ownerName = ownerName
        
      
    }

    deposit(money: number) {
        this.money += money
    }

    expense(amount: number, expenseType: string): void {
        if (expenseType in this.recentTransactions && this.money >= amount) {
            this.recentTransactions[expenseType] += amount 
        } else if (this.money >= amount && !(expenseType in this.recentTransactions)) {
            this.recentTransactions[expenseType] = amount
        } else {
            throw new Error(`You cant make ${expenseType} transaction`)
        }
        this.money -= amount
    }

    showDetails(): string {
        let totalAmount = 0;
        for (const transaction in this.recentTransactions) {
            totalAmount += this.recentTransactions[transaction]
        }

        let result = ''
        result = result.concat(
        `Bank name: ${this.bankName}\n`,
        `Bank ID: ${this.bankID}\n`,
        `Owner name: ${this.ownerName}\n`,
        `Money: ${this.money}\n`,
        `Money Spent: ${totalAmount}`)
        

        return result;
    }

}



// let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');

// account.deposit(1000);

// account.deposit(1000);

// account.expense(700, 'Buy new phone');

// account.expense(400, 'Book a vacation');

// account.expense(400, 'Book a vacation');

// account.expense(100, 'Buy food');

// console.log(account.showDetails());

let account2 = new PersonalAccount('Fibank', 100000,

'Petar Petrol');

account2.deposit(10000);

account2.deposit(7000);

account2.expense(1200, 'Buy a new car');

account2.expense(200, 'Go to a fancy restaurant');

account2.expense(100, 'Go to a bar');

account2.expense(30, 'Go to the movies');

console.log(account2.showDetails());