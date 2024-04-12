class BankAccount {
    constructor() {
        this._id = ++BankAccount.lastId;
        this._balance = 0;
    }
    static setInterest(interest) {
        BankAccount._interest = interest;
    }
    getInterest(years) {
        let interestStr = BankAccount._interest * years;
        return interestStr * this._balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    getId() {
        return this._id;
    }
}
BankAccount._interest = 0.02;
BankAccount.lastId = 0;
class TestClient {
    constructor() {
        this.users = {};
    }
    processCommands(command) {
        const commands = command.split(' ');
        const action = commands[0];
        if (action === 'Create') {
            this.createAccount();
        }
        else if (action === 'Deposit') {
            const accountId = Number(commands[1]);
            const amount = parseFloat(commands[2]);
            this.deposit(accountId, amount);
        }
        else if (action === 'GetInterest') {
            const accountId = parseInt(commands[1]);
            const years = parseInt(commands[2]);
            this.getInterest(accountId, years);
        }
        else if (action === 'SetInterest') {
            const interest = parseFloat(commands[1]);
            BankAccount.setInterest(interest);
        }
        else if (action === 'End') {
            return;
        }
    }
    createAccount() {
        const account = new BankAccount();
        this.users[account.getId()] = account;
        console.log(`Account ID${account.getId()} created`);
    }
    deposit(id, amount) {
        if (this.users[id]) {
            this.users[id].deposit(amount);
            console.log(`Deposited ${amount} to ID${id}`);
        }
        else {
            console.log(`Account with ID${id} does not exist`);
        }
    }
    getInterest(id, years) {
        if (this.users[id]) {
            let interest = this.users[id].getInterest(years);
            console.log(interest.toFixed(2));
        }
    }
}
const commands = ['Create',
    'Create',
    'Deposit 1 20',
    'Deposit 3 20',
    'Deposit 2 10',
    'SetInterest 1.5',
    'GetInterest 1 1',
    'GetInterest 2 1',
    'GetInterest 3 1',
    'End'];
const clientAccount = new TestClient();
for (const element of commands) {
    clientAccount.processCommands(element);
}
;
//# sourceMappingURL=main.js.map