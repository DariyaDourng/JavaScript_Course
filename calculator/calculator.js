// script.js

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    const equals = document.getElementById('equals');
    const clear = document.getElementById('clear');

    let currentInput = '';

    // Handle button clicks
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === '.' && currentInput.includes('.')) return; // Prevent multiple dots
            if (value === '/' && (currentInput === '' || /[/*+-]$/.test(currentInput))) return; // Prevent invalid expressions

            currentInput += value;
            display.value = currentInput;
        });
    });

    // Handle equals button click
    equals.addEventListener('click', function() {
        try {
            // Use a safer method to evaluate the expression
            const result = calculate(currentInput);
            display.value = result;
            currentInput = result;
        } catch {
            display.value = 'Error';
            currentInput = '';
        }
    });

    // Handle clear button click
    clear.addEventListener('click', function() {
        currentInput = '';
        display.value = '';
    });

    // Function to calculate the result
    function calculate(expression) {
        // Remove any non-numeric or non-operator characters except decimal points
        expression = expression.replace(/[^0-9+\-*/.]/g, '');
        // Replace division and multiplication signs with their JavaScript equivalents
        expression = expression.replace(/(\d+\.?\d*)\s*([\/*])\s*(\d+\.?\d*)/g, function(_, num1, op, num2) {
            return eval(num1 + op + num2);
        });
        // Replace addition and subtraction signs
        expression = expression.replace(/(\d+\.?\d*)\s*([\+-])\s*(\d+\.?\d*)/g, function(_, num1, op, num2) {
            return eval(num1 + op + num2);
        });
        return parseFloat(expression);
    }
});
