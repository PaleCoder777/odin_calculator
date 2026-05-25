// Project: Calculator

// Basic Math Operators Functions
function mathAdd(num1, num2) {
    return (num1 + num2);
}

function mathSubtract(num1, num2) {
    return (num1 - num2);
}

function mathMultiply(num1, num2) {
    return (num1 * num2);
}

function mathDivide(num1, num2) {
    return (num1 / num2);
}

// 3 variables for a calculatior operations
let calcValue1;
let calcValue2;
let calcOperator;

// Calculatore Operate function, calls our math operator functions
function calcOperate(operator, num1, num2) {
    if (operator === "+") return mathAdd(num1, num2);
    if (operator === "-") return mathSubtract(num1, num2);
    if (operator === "*") return mathMultiply(num1, num2);
    if (operator === "/") return mathDivide(num1, num2);
}