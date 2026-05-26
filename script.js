// Project: Calculator

// Object for math operator functions
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
let currentCalcValue = {
    storeValue1: "",
    value1: "",
    storeValue2: "",
    value2: "",
    operator: "",
    calcOperate: function(num1, operator, num2) {
        if (operator === "+") return mathOperations.add(num1, num2);
        if (operator === "-") return mathOperations.subtract(num1, num2);
        if (operator === "*") return mathOperations.multiply(num1, num2);
        if (operator === "/") return mathOperations.divide(num1, num2);
    },
};

// DOM Nodes Object
let nodeSelect = {
    display: document.querySelector("#display"),
    clear: document.querySelector("#clear"),
    dividedBy: document.querySelector("#dividedBy"),
    sevenBtn: document.querySelector("#sevenBtn"),
    eightBtn: document.querySelector("#eightBtn"),
    nineBtn: document.querySelector("#nineBtn"),
    times: document.querySelector("#times"),
    fourBtn: document.querySelector("#fourBtn"),
    fiveBtn: document.querySelector("#fiveBtn"),
    sixBtn: document.querySelector("#sixBtn"),
    minus: document.querySelector("#minus"),
    oneBtn: document.querySelector("#oneBtn"),
    twoBtn: document.querySelector("#twoBtn"),
    threeBtn: document.querySelector("#threeBtn"),
    plus: document.querySelector("#plus"),
    calcBtns: document.querySelector("#calcBtns"), 
}

// For event listener things
let changeDom = {
    updateDisplay: function(valueToDisplay){
        nodeSelect.display.textContent += valueToDisplay;
    },
    storeDisplay: function(valueToStore) {
        if (currentCalcValue.operator === ""){
            currentCalcValue.storeValue1 = currentCalcValue.storeValue1.concat(valueToStore);
        } else {
            currentCalcValue.storeValue2 = currentCalcValue.storeValue2.concat(valueToStore);
        }
    },
}

// Event Delegation to calcButtons div
nodeSelect.calcBtns.addEventListener("click", () => {
    let target = event.target;

    switch(target.id) {
        case ("plus"):
            nodeSelect.display.textContent += nodeSelect.plus.textContent;
            currentCalcValue.operator = ("+");
            console.log(currentCalcValue.operator);
            break;

        case ("oneBtn"):
            // Update display w/ button value
            changeDom.updateDisplay(nodeSelect.oneBtn.textContent);

            // Concat button value to our value holder
            changeDom.storeDisplay(nodeSelect.oneBtn.textContent);
            console.log(`Store Value 1:${currentCalcValue.storeValue1}`);
            console.log(`Store Value 2:${currentCalcValue.storeValue2}`);

            break;

        case ("twoBtn"):
            nodeSelect.display.textContent += (`${nodeSelect.twoBtn.textContent}`);
            currentCalcValue.value1 = +(nodeSelect.display.textContent);

            console.log(currentCalcValue.value1);           
            break;
        
        case ("threeBtn"):
            nodeSelect.display.textContent += (`${nodeSelect.threeBtn.textContent}`);
            break;

        case ("fourBtn"):
            nodeSelect.display.textContent += (`${nodeSelect.fourBtn.textContent}`);
            break;

        case ("fiveBtn"):
            nodeSelect.display.textContent += (`${nodeSelect.fiveBtn.textContent}`);
            break;

        case ("sixBtn"):
            nodeSelect.display.textContent += (`${nodeSelect.sixBtn.textContent}`);
            break;

        case ("sevenBtn"):
            nodeSelect.display.textContent += (`${nodeSelect.sevenBtn.textContent}`);
            break;
        
        case ("eightBtn"):
            nodeSelect.display.textContent += (`${nodeSelect.eightBtn.textContent}`);
            break;
        
        case ("nineBtn"):
            nodeSelect.display.textContent += (`${nodeSelect.nineBtn.textContent}`);
            break;
    }
});