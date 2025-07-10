const Bank = function()
{
    let money = 500;
    const DepositCash = function(depositAmount)
    {
        money += depositAmount;
    }
    const ShowBalance =function()
    {
        console.log(money);
    }
    return{
        deposit: DepositCash,
        showBalance: ShowBalance
    }
}








const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
