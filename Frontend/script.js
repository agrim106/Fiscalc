document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calc-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const interestRate = parseFloat(document.getElementById('interest').value);
        const years = parseFloat(document.getElementById('years').value);

        const total = calculateTotal(amount, interestRate, years);
        resultDiv.innerHTML = `Total Amount after ${years} years: $${total.toFixed(2)}`;
    });

    function calculateTotal(amount, interestRate, years) {
        const interest = (interestRate / 100) * amount;
        return amount + interest * years;
    }
})
