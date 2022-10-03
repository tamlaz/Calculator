const displayBottom = document.querySelector('.resultbar-bottom');
let currentValueHolder = document.createElement('div');
displayBottom.appendChild(currentValueHolder);
const displayTop = document.querySelector('.resultbar-top');
let prevValueHolder = document.createElement('div');
displayTop.appendChild(prevValueHolder);


let mathResult = '';
let storedNumber = '';
let firstNumber = '';
const numbers = document.querySelectorAll(".numbers");
numbers.forEach(number => {
    number.addEventListener('click', () => {
        storedNumber += number.value
        currentValueHolder.textContent += storedNumber;
        displayResult();
    });
});
console.log(storedNumber);

let clickedOperator = '';
const operators = document.querySelectorAll(".operators");
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        firstNumber = storedNumber;
        clickedOperator = operator.value;
        currentValueHolder.textContent += clickedOperator;
        storedNumber = '';
    });
});

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

const displayResult = () => {
    mathResult = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
    currentValueHolder.textContent = mathResult;
    console.log(mathResult);
    prevValueHolder.textContent = `${firstNumber} ${clickedOperator} ${storedNumber}`;
    storedNumber = '';
};

const btnEqual = document.querySelector('.equal');
btnEqual.addEventListener('click', e => {
    displayResult();
});

const clearAll = () => {
    storedNumber = '';
    firstNumber = '';
    currentValueHolder.textContent = '';
    prevValueHolder.textContent = ''; 
    mathResult = '';
};

const btnClear = document.querySelector('.allclear');
btnClear.addEventListener('click', e => {
    clearAll();
});