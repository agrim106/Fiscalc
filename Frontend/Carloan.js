/* autoloan.js */

function calculateMonthlyPayment() {
    // Get input values
    let vehiclePrice = parseFloat(document.getElementById('vehiclePrice').value);
    let downPayment = parseFloat(document.getElementById('downPayment').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly interest rate
    let loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12; // Loan term in months

    // Calculate loan amount
    let loanAmount = vehiclePrice - downPayment;

    // Calculate monthly payment
    let monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    // Display result
    document.getElementById('monthlyPayment').innerText = `$${monthlyPayment.toFixed(2)}`;
}

// Event listener for button click
document.getElementById('calculateBtn').addEventListener('click', calculateMonthlyPayment);
