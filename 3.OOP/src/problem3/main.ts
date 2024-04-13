


class BankAccount {

    private _balance: number
    private _id: number
    private static _interest: number = 0.02
    public static lastId: number = 0

    constructor() {
        this._id = ++BankAccount.lastId;
        this._balance = 0
    }


    static setInterest(interest: number) {
        BankAccount._interest = interest
    }

    getInterest(years: number) {
        let interestStr = BankAccount._interest * years
        return interestStr * this._balance

    }

    deposit(amount: number) {
        this._balance += amount
    }

    getId() {
        return this._id
    }


}


class TestClient {
    private users: { [id: number]: BankAccount } = {}

    processCommands(command: string) {
        const commands = command.split(' ')
        const action = commands[0]

        if (action === 'Create') {
            this.createAccount();

        } else if (action === 'Deposit') {
            const accountId = Number(commands[1])
            const amount = parseFloat(commands[2])
            this.deposit(accountId, amount)

        } else if (action === 'GetInterest') {
            const accountId = parseInt(commands[1])
            const years = parseInt(commands[2])
            this.getInterest(accountId, years)

        } else if (action === 'SetInterest') {
            const interest = parseFloat(commands[1])
            BankAccount.setInterest(interest)
        } else if (action === 'End'){
            return;
        }
    }

    private createAccount() {
        const account = new BankAccount();
        this.users[account.getId()] = account;
        console.log(`Account ID${account.getId()} created`);
    }

    private deposit(id: number, amount: number) {
        if (this.users[id]) {
            this.users[id].deposit(amount)
            console.log(`Deposited ${amount} to ID${id}`);
        } else {
            console.log(`Account with ID${id} does not exist`);
        }

    }

    private getInterest(id: number, years: number) {
        if (this.users[id]) {
            let interest = this.users[id].getInterest(years)
            console.log(interest.toFixed(2));
        }
    }
}

const commands: string[] = ['Create',

    'Create',
    
    'Deposit 1 20',
    
    'Deposit 3 20',
    
    'Deposit 2 10',
    
    'SetInterest 1.5',
    
    'GetInterest 1 1',
    
    'GetInterest 2 1',
    
    'GetInterest 3 1',
    
    'End']

const clientAccount = new TestClient();
for (const element of commands) {
   
    clientAccount.processCommands(element)
    
};
