const billInput = document.getElementById("bill-amount");
const percentageButtons = document.querySelectorAll(".percent-btn");
const customPercentage = document.getElementById("custom-percentage");
const error = document.getElementById("error");
const numberOfPeople = document.getElementById("number-of-persons");
const tipPerPerson = document.getElementById("tip-amount-per-person");
const totalPerPerson = document.getElementById("total-amount-per-person");
const resetButton = document.getElementById("reset");

var billTotal = 0;
var tipPercent = 1;
var headCount = 1;

billInput.addEventListener("keyup", executeTask);
customPercentage.addEventListener("keyup", executeTask);
numberOfPeople.addEventListener("keyup", executeTask);

function executeTask(e) {
    if (e.keyCode == 13) {
        getInput();
        calculateTip();
    }
}

function getButtonsPercentage() {
    let buttons = [...percentageButtons];

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            tipPercent = parseFloat(button.value);
        });
    });
}
function getInput() {
    billTotal = parseFloat(billInput.value);

    if (customPercentage.value == "") {
        getButtonsPercentage();
    } else {
        tipPercent = parseFloat(customPercentage.value);
    }
    console.log(parseFloat(tipPercent));
    console.log(billTotal);

    if (numberOfPeople.value < 1) {
        error.style.visibility = "visible";
        numberOfPeople.value = 1;
    } else {
        headCount = parseInt(numberOfPeople.value, 10);
        console.log(headCount);
    }
}
function calculateTip() {
    let tipAmountPerPerson = 0;
    let totalAmountPerPerson = 0;
    tipAmountPerPerson = ((tipPercent / 100) * billTotal) / headCount;
    tipAmountPerPerson = parseFloat(tipAmountPerPerson.toFixed(2));

    totalAmountPerPerson = (tipAmountPerPerson + billTotal) / headCount;
    totalAmountPerPerson = totalAmountPerPerson.toFixed(2);

    tipPerPerson.innerText = tipAmountPerPerson;
    totalPerPerson.innerText = totalAmountPerPerson;
    console.log(tipAmountPerPerson);
    console.log(totalAmountPerPerson);
}
resetButton.addEventListener("click", () => {
    billInput.value = "";
    customPercentage.value = "";
    numberOfPeople.value = "";
    tipPerPerson.innerText = "0.00";
    totalPerPerson.innerText = "0.00";
    error.style.visibility = "hidden";
});
