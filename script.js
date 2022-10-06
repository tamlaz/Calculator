// Creating div's to display information about the calculation
const displayBottom = document.querySelector('.resultbar-bottom');
let currentValueHolder = document.createElement('div');
displayBottom.appendChild(currentValueHolder);
const displayTop = document.querySelector('.resultbar-top');
let prevValueHolder = document.createElement('div');
displayTop.appendChild(prevValueHolder);


let mathResult = '';
let storedNumber = '';
let firstNumber = '';
// looping through the buttons that store integer values with a forEach method, to store their values in a variable when the user clicks on them
const numbers = document.querySelectorAll(".numbers");
numbers.forEach(number => {
    number.addEventListener('click', () => {
        storedNumber += number.value
        currentValueHolder.textContent = storedNumber;
    })
});

// doing the same loop as above, for the buttons that store the operator values
let clickedOperator = '';
const operators = document.querySelectorAll(".operators");
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (firstNumber && storedNumber) {
            displayResult();
          }
        firstNumber = storedNumber;
        currentValueHolder.textContent = '';
        clickedOperator = operator.value;
        prevValueHolder.textContent = storedNumber + '' + clickedOperator;
        storedNumber = '';
    });
});

// functions for the basic calculations that calculator can do
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
    // check if the user wants to use 0 as the denominator
    if (b === 0 || isNaN(b)) {
        return "C'mon mate! No zero";
    } else {
        return a / b;
    }
}

// a function that calls the above functions based on which one of them was clicked
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

// function that calls the operate() function from above and set the value of variable mathResult, it also resets one of the display divs and the variable firstNumber
const displayResult = () => {
    mathResult = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
    currentValueHolder.textContent = mathResult;
    prevValueHolder.textContent = '';
    storedNumber = mathResult;
    firstNumber = '';
};

// an eventListener added to the 'equal button' to call the above function
const btnEqual = document.querySelector('.equal');
btnEqual.addEventListener('click', e => {
    displayResult();
});

// function to clear everything on the display and to reset every variable
const clearAll = () => {
    storedNumber = '';
    firstNumber = '';
    currentValueHolder.textContent = '';
    prevValueHolder.textContent = ''; 
    mathResult = '';
};

// eventListener to call the above function
const btnClear = document.querySelector('.allclear');
btnClear.addEventListener('click', e => {
    clearAll();
});

// function to delete the last item of the string that displays the current value every time its clicked
const clearLast = () => {
    storedNumber = storedNumber.slice(0, -1);
    currentValueHolder.textContent = storedNumber;
    console.log(storedNumber);
    console.log(typeof(storedNumber));
};

// eventListener to call the above function
const btnDelete = document.querySelector('.delete');
btnDelete.addEventListener('click', e => {
    clearLast();
});

// function that calculates the percentage value ofa number i.e 50 is equal to 0.5
const makePercentage = () => {
    storedNumber = storedNumber / 100;
    currentValueHolder.textContent = storedNumber;
};

// eventListener to call the above function
const btnPercent = document.querySelector('.percent');
btnPercent.addEventListener('click', e => {
    makePercentage();
});