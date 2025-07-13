export class BankLogic
{
    constructor()
    {
        this.m_NumberOfOptionsInMenu = 4;
        this.Customers = new Array;
    }
    AddCustomer(i_Customer)
    {
        let newCustomer = new Customer(i_Customer, 0);
        this.Customers.push(newCustomer);
    }
    DepositMoney(i_CustomerName/*string-name*/, i_Amount)
    {
        for(let i = 0; i < this.Customers.length; i++)
        {
            if(this.Customers[i].m_Name === i_CustomerName)
            {
                this.Customers[i].m_Balance += i_Amount;
                console.log(`New balance: ${this.Customers[i].m_Balance}`);
                break;
            }
        }
    }
    WithrawMoney(i_CustomerName, i_Amount)
    {
           for(let i = 0; i < this.Customers.length; i++)
        {
            if(this.Customers[i].m_Name === i_CustomerName)
            {
                this.Customers[i].m_Balance -= i_Amount;
                console.log(`New balance: ${this.Customers[i].m_Balance}`);
                break;
            }
        }
    }
    GetNumberOfOptions()
    {
        return this.m_NumberOfOptionsInMenu;
    }
    IsValidChoice(i_Choice)
    {
        if(i_Choice > this.m_NumberOfOptionsInMenu)
            return false;
        else
            return true;
    }
    CheckBalance(i_Customer)
    {
           for(let i = 0; i < this.Customers.length; i++)
        {
            if(this.Customers[i].m_Name === i_Customer)
            {
                console.log(this.Customers[i].m_Balance);
            }
        }
    }
    ApplyUserChoice(i_UserChoice, i_Amount)
    {
        if(i_UserChoice === "1")
            this.CheckBalance("Guy");
        else if(i_UserChoice === "2")
            this.DepositMoney("Guy", i_Amount);
        else if(i_UserChoice === "3")
            this.WithrawMoney("Guy", i_Amount)
        else if(i_UserChoice === "4")
            return true;
        return false;
    }
}

class Customer
{
    constructor(i_Name, i_Balance)
    {
        this.m_Name = i_Name; 
        this.m_Balance = i_Balance;
    }
}