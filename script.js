
function intersetRate(input) {
    if (input.value < input.min) {
        input.value = input.min;
    } else if (input.value > input.max) {
        input.value = input.max;
    }
    console.log(input.value, "interest Rate")
}

// function monthsToPay(input) {
//     if (input.value < input.min) {
//         input.value = input.min;
//     } else if (input.value > input.max) {
//         input.value = input.max;
//     }
// console.log(input.value, "monthstoPay Rate")

// }



function calculateLoan() {

    var loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
    var interestRateValue = parseFloat(document.getElementById("interest-rate").value);
    var monthsToPayValue = parseFloat(document.getElementById("months-to-pay").value);

    var interest = (loanAmountValue * interestRateValue * monthsToPayValue) / 1200;
    var monthlyPayment = (loanAmountValue + interest) / monthsToPayValue;

    document.getElementById("payment-value").innerHTML = `${monthlyPayment}`;
}

calculateLoan();