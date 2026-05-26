// Project: Calculator

// Basic Math Operators Functions
let mathOperations = {
    add: function (num1, num2) {
    return (num1 + num2);
    },
    subtract: function (num1, num2) {
    return (num1 - num2);
    },
    multiply: function (num1, num2) {
    return (num1 * num2);
    },
    divide: function (num1, num2) {
    return (num1 / num2);
    },
}

// 3 variables for a calculatior operations
let calcOperations = {};

let calcValue1;
let calcValue2;
let calcOperator;

// Calculatore Operate function, calls our math operator functions
function calcOperate(num1, operator, num2) {
    if (operator === "+") return mathOperations.add(num1, num2);
    if (operator === "-") return mathOperations.subtract(num1, num2);
    if (operator === "*") return mathOperations.multiply(num1, num2);
    if (operator === "/") return mathOperations.divide(num1, num2);
}