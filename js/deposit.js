document.getElementById('deposit-Button').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    if (newDepositAmountString !== "") {
        console.log(newDepositAmountString);
        const newDepositAmount = parseFloat(newDepositAmountString);

        const depositTotalElement = document.getElementById('deposit-total');
        const previousDepositTotalString = depositTotalElement.innerText;
        const previousDepositTotal = parseFloat(previousDepositTotalString);
        console.log(previousDepositTotal);


        const currentDepositTotal = previousDepositTotal + newDepositAmount;
        console.log(currentDepositTotal);

        depositTotalElement.innerText = currentDepositTotal;


        depositField.value = '';

    }
})
