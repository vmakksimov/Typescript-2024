class BankAccount {
    constructor() {
        this.balance = 0;
        this.id = ++BankAccount.prevId;
    }
    static setInterestRate(interest) {
        BankAccount.interestRate = interest;
    }
    getInterest(id, years) {
        let result = (this.balance * BankAccount.interestRate) * years;
        return Number(result.toFixed(2));
    }
    deposit(id, amount) {
        this.balance += amount;
    }
    getId() {
        return this.id;
    }
}
BankAccount.interestRate = 0.02;
BankAccount.prevId = 0;
const inputStrBank = [
    "Create",
    "Create",
    "Deposit 1 20",
    "Deposit 3 20",
    "Deposit 2 10",
    "SetInterest 1.5",
    "GetInterest 1 1",
    "GetInterest 2 1",
    "GetInterest 3 1",
    "End"
];
const processInputBank = (array) => {
    const banks = {};
    for (const x of array) {
        const commandStr = x.split(' ');
        const command = commandStr[0];
        if (command === 'Create') {
            const bank = new BankAccount();
            console.log(`Account ID${bank.getId()} created.`);
            banks[bank.getId()] = bank;
        }
        else if (command === 'Deposit') {
            const bankId = parseInt(commandStr[1]);
            const amount = parseInt(commandStr[2]);
            if (!(bankId in banks)) {
                console.log('Account does not exist');
            }
            else {
                banks[bankId].deposit(bankId, amount);
                console.log(`Deposited ${amount} to ID${bankId}`);
            }
        }
        else if (command === 'GetInterest' && (parseInt(commandStr[1]) in banks)) {
            const bankId = parseInt(commandStr[1]);
            const years = parseInt(commandStr[2]);
            const interest = banks[bankId].getInterest(bankId, years);
            console.log(interest);
        }
        else if (command == 'SetInterest') {
            const newInterest = parseFloat(commandStr[1]);
            BankAccount.setInterestRate(newInterest);
        }
        else if (command == 'End') {
            break;
        }
    }
};
processInputBank(inputStrBank);
//# sourceMappingURL=main.js.map