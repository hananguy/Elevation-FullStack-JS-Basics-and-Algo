import promptSync from 'prompt-sync';       // import במקום require
const prompt = promptSync({ sigint: true }); 
import { BankLogic } from './Logic.js';


export function Bank()
{
    const Bank = new BankLogic();
    Bank.AddCustomer("Guy");
    Bank.AddCustomer("Dekel");

    let exit = false;

    while(exit === false)
    {
        PrintMenu();
        let userChoice = GetInputFromUser(Bank);
        exit = Bank.ApplyUserChoice(userChoice, 100);
    }
}
function PrintMenu()
{
    console.log("=== Banking System ===");
    console.log("1) Check Balance");
    console.log("2) Deposit Money");
    console.log("3) Withdraw Money");
    console.log("4) Exit");
}
function GetInputFromUser(i_Bank)
{
    const numOfOptions = i_Bank.GetNumberOfOptions();
    let userChoice = prompt(`Choose option (1-${numOfOptions}): `);
    while(i_Bank.IsValidChoice(userChoice) === false)
    {
        console.log("Invalid option !");
        userChoice = prompt(`Choose option (1-${numOfOptions}): `);
    }

    return userChoice;
}
