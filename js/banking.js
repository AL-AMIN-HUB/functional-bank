/* function doubleIt(num) {
    const result = num * 2;
    return result;
}

const first = doubleIt(5);
const second = doubleIt(7); */


function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    // clear
    depositInput.value = '';
    return depositAmount;

}




document.getElementById('deposit-button').addEventListener('click', function() {
    /*  const depositInput = document.getElementById('deposit-input');
     const depositAmount = depositInput.value; */


    //  The function is called in the bottom line
    const depositAmount = getInputValue();



    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = parseFloat(depositTotalText) + parseFloat(depositAmount);

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmount);

    /*   // clear
      depositInput.value = ''; */

});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function() {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    withdrawTotal.innerText = parseFloat(withdrawTotalText) + parseFloat(withdrawAmount);

    // update balance after withdraw

    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    totalBalance.innerText = parseFloat(totalBalanceText) - parseFloat(withdrawAmount);

    // clear
    withdrawInput.value = '';


})