document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    const withdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawElement.innerText;
    const previousWithdarawTotal = parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal = previousWithdarawTotal + newWithdrawAmount;
    withdrawElement.innerText = newWithdrawTotal;


    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal







    withdrawField.value = '';
})