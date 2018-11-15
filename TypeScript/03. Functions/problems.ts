// exercise
// create an explicit type
type BankAccount = {money: number, deposit: (val1: number) => void }

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value){
        this.money += value;
    }
};

let mySelf: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

mySelf.bankAccount.deposit(3000);

console.log(mySelf);
