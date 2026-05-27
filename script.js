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
let currentCalc = {
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
    calculator: document.querySelector("#calculator"),
}

// For event listener things
let changeDOM = {
    updateDisplay: function(valueToDisplay){
        nodeSelect.display.textContent = valueToDisplay;
    },
    incrementDisplay: function(valueToIncrement){
        nodeSelect.display.textContent += valueToIncrement;
    },
    resetDisplay: function() {
        nodeSelect.display.textContent = ("");
    },
    storeValue: function(valueToStore) {
        if (currentCalc.operator === ""){
            currentCalc.storeValue1 = currentCalc.storeValue1.concat(valueToStore);
        } else {
            currentCalc.storeValue2 = currentCalc.storeValue2.concat(valueToStore);
        }
    },
    storeOperator: function(operatorToStore) {
        currentCalc.operator = currentCalc.operator.concat(operatorToStore);
    },
    convertToNumber: function(storeValue1, storeValue2){
        currentCalc.value1 = +(storeValue1);
        currentCalc.value2 = +(storeValue2);
    },
    removeAllStored: function() {
        currentCalc.storeValue1 = ("");
        currentCalc.storeValue2 = ("");
        currentCalc.operator = ("");
    },
    removeSomeStored: function(){
        currentCalc.storeValue2 = ("");
        currentCalc.operator = ("");
    },
}



// Event Delegation to calcButtons div
nodeSelect.calculator.addEventListener("click", () => {
    let target = event.target;

    switch(target.id) {
        case ("clear"):
            // Reset display
            changeDOM.resetDisplay();

            // Reset stored values
            changeDOM.removeAllStored();

            break;

        case ("equalsBtn"):
            // Change string values to number type
            changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);

            // Calculate result as a string, display result
            let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
            changeDOM.updateDisplay(result);

            // Store result value into storevalue1, reset the other 2
            currentCalc.storeValue1 = result;
            changeDOM.removeSomeStored();

            break;
        
        case ("plus"):
            changeDOM.incrementDisplay(nodeSelect.plus.textContent);
            changeDOM.storeOperator(nodeSelect.plus.textContent);
            console.log(`Stored Operator:${currentCalc.operator}`);
            break;

        case ("minus"):
            changeDOM.incrementDisplay(nodeSelect.minus.textContent);
            changeDOM.storeOperator(nodeSelect.minus.textContent);
            console.log(`Stored Operator:${currentCalc.operator}`);
            break;

        case ("times"):
            changeDOM.incrementDisplay(nodeSelect.times.textContent);
            changeDOM.storeOperator(nodeSelect.times.textContent);
            console.log(`Stored Operator:${currentCalc.operator}`);
            break;

        case ("dividedBy"):
            changeDOM.incrementDisplay(nodeSelect.dividedBy.textContent);
            changeDOM.storeOperator(nodeSelect.dividedBy.textContent);
            console.log(`Stored Operator:${currentCalc.operator}`);
            break;

        case ("oneBtn"):
            // Update display w/ button value
            changeDOM.incrementDisplay(nodeSelect.oneBtn.textContent);

            // Concat button value to our value holder
            changeDOM.storeValue(nodeSelect.oneBtn.textContent);
            console.log(`Store Value 1:${currentCalc.storeValue1}`);
            console.log(`Store Value 2:${currentCalc.storeValue2}`);

            break;

        case ("twoBtn"):
            // Update display w/ button value
            changeDOM.incrementDisplay(nodeSelect.twoBtn.textContent);

            // Concat button value to our value holder
            changeDOM.storeValue(nodeSelect.twoBtn.textContent);
            console.log(`Store Value 1:${currentCalc.storeValue1}`);
            console.log(`Store Value 2:${currentCalc.storeValue2}`);
            break;
        
        case ("threeBtn"):
            changeDOM.incrementDisplay(nodeSelect.threeBtn.textContent);

            // Concat button value to our value holder
            changeDOM.storeValue(nodeSelect.threeBtn.textContent);
            console.log(`Store Value 1:${currentCalc.storeValue1}`);
            console.log(`Store Value 2:${currentCalc.storeValue2}`);
            break;

        case ("fourBtn"):
            changeDOM.incrementDisplay(nodeSelect.fourBtn.textContent);

            // Concat button value to our value holder
            changeDOM.storeValue(nodeSelect.fourBtn.textContent);
            console.log(`Store Value 1:${currentCalc.storeValue1}`);
            console.log(`Store Value 2:${currentCalc.storeValue2}`);
            break;

        case ("fiveBtn"):
            changeDOM.incrementDisplay(nodeSelect.fiveBtn.textContent);

            // Concat button value to our value holder
            changeDOM.storeValue(nodeSelect.fiveBtn.textContent);
            console.log(`Store Value 1:${currentCalc.storeValue1}`);
            console.log(`Store Value 2:${currentCalc.storeValue2}`);
            break;

        case ("sixBtn"):
            changeDOM.incrementDisplay(nodeSelect.sixBtn.textContent);

            // Concat button value to our value holder
            changeDOM.storeValue(nodeSelect.sixBtn.textContent);
            console.log(`Store Value 1:${currentCalc.storeValue1}`);
            console.log(`Store Value 2:${currentCalc.storeValue2}`);
            break;

        case ("sevenBtn"):
            changeDOM.incrementDisplay(nodeSelect.sevenBtn.textContent);

            // Concat button value to our value holder
            changeDOM.storeValue(nodeSelect.sevenBtn.textContent);
            console.log(`Store Value 1:${currentCalc.storeValue1}`);
            console.log(`Store Value 2:${currentCalc.storeValue2}`);
            break;
        
        case ("eightBtn"):
            changeDOM.incrementDisplay(nodeSelect.eightBtn.textContent);

            // Concat button value to our value holder
            changeDOM.storeValue(nodeSelect.eightBtn.textContent);
            console.log(`Store Value 1:${currentCalc.storeValue1}`);
            console.log(`Store Value 2:${currentCalc.storeValue2}`);
            break;
        
        case ("nineBtn"):
            changeDOM.incrementDisplay(nodeSelect.nineBtn.textContent);

            // Concat button value to our value holder
            changeDOM.storeValue(nodeSelect.nineBtn.textContent);
            console.log(`Store Value 1:${currentCalc.storeValue1}`);
            console.log(`Store Value 2:${currentCalc.storeValue2}`);
            break;
    }
});