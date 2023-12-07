const money = [
    {currency: "twenties", value: 20.00},
    {currency: "tens", value: 10.00},
    {currency: "fives", value: 5.00},
    {currency: "twos", value: 2.00},
    {currency: "ones", value: 1.00},
    {currency: "quarters", value: 0.25},
    {currency: "dimes", value: 0.10},
    {currency: "nickels", value: 0.05},
    {currency: "pennies", value: 0.01}
];

function changeOutput(currency, count) {
    // let outputElement = document.getElementById(`${currency}-output`);
    // let countElement = outputElement.querySelector("span");
    // countElement.textContent = `${count}`;
    let outputElement = document.getElementById(`${currency}-output`);
    let countElement = outputElement.querySelector("span");

    for (let i = 0; i <= count; i++) {
        setTimeout(() => {
            countElement.innerHTML = i;
        }, i * 50); // Adjust the delay (in milliseconds) as needed
    }
}

function calculateChange(totalCost, amountPaid) {
    let change = amountPaid - totalCost;
    
    money.forEach(bill => {
        if (change >= bill.value) {
            let count = Math.floor(change / bill.value);
            change -= count * bill.value;
            changeOutput(bill.currency, count);
        }
    })
}

function main() {
    const cost = parseFloat(document.getElementById("amount-due").value);
    const paid = parseFloat(document.getElementById("amount-received").value);

    if (isNaN(cost) || isNaN(paid) || cost > paid) {
        document.getElementById("error-messages").textContent = "Invalid Input or you didn't pay enough..."
    }
    else {
        calculateChange(cost, paid);
    }
}

document.getElementById("calculate-change").onclick = main;
