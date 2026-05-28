// Project: Calculator
/* Testing boolean of (empty)strings
let x = "something";
let y = "";

if (x){
    console.log(`x: has string inside`);
} else {
    console.log(`x: no string inside`);
}

if (y){
    console.log(`y: has string inside`);
} else {
    console.log(`y: no string inside`);
}
*/

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
    equalsPressed: false,
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
    replaceOperator: function(operatorReplacement) {
    currentCalc.operator = operatorReplacement;
    },
    convertToNumber: function(storeValue1, storeValue2){
        currentCalc.value1 = +(storeValue1);
        currentCalc.value2 = +(storeValue2);
    },
    removeAllStored: function() {
        currentCalc.storeValue1 = ("");
        currentCalc.storeValue2 = ("");
        currentCalc.value1 = ("");
        currentCalc.value2 = ("");
        currentCalc.operator = ("");
    },
    removeSomeStored: function(){
        currentCalc.storeValue2 = ("");
        currentCalc.operator = ("");
    },
    removeStoreValue2: function(){
        currentCalc.storeValue2 = ("");
    },
}



// Event Delegation to calcButtons div
nodeSelect.calculator.addEventListener("click", () => {
    let target = event.target;

    switch(target.id) {     
        case ("clear"):
            currentCalc.equalsPressed = false;
        
            // Reset display
            changeDOM.resetDisplay();

            // Reset stored values
            changeDOM.removeAllStored();

            break;

        case ("equalsBtn"):
            if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                // equalsPressed true
                currentCalc.equalsPressed = true;

                // Change string values to number type
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);

                // Calculate result as a string, display result
                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                changeDOM.updateDisplay(result);

                // Store result value into storevalue1, reset the other 2
                currentCalc.storeValue1 = result;
                changeDOM.removeSomeStored();
            }

            break;
        
        case ("plus"):
            currentCalc.equalsPressed = false;
            if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);

                console.log(currentCalc.value1, currentCalc.value2);

                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);

                console.log(result);

                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.plus.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);

                console.log(currentCalc.storeValue1, currentCalc.operator,currentCalc.storeValue2);
            } else if (currentCalc.operator){
                console.log(`Operator before replaced`)
                changeDOM.replaceOperator(nodeSelect.plus.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                console.log(`Operator after replaced`)
            } else {
                changeDOM.incrementDisplay(nodeSelect.plus.textContent);
                changeDOM.storeOperator(nodeSelect.plus.textContent);
                console.log(`Stored Operator:${currentCalc.operator}`);
            }
            break;

        case ("minus"):
            currentCalc.equalsPressed = false;
            if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);

                console.log(currentCalc.value1, currentCalc.value2);

                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);

                console.log(result);

                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.minus.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);

                console.log(currentCalc.storeValue1, currentCalc.operator,currentCalc.storeValue2);
            } else if (currentCalc.operator){
                console.log(`Operator before replaced`)
                changeDOM.replaceOperator(nodeSelect.minus.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                console.log(`Operator after replaced`)
            } else {
                changeDOM.incrementDisplay(nodeSelect.minus.textContent);
                changeDOM.storeOperator(nodeSelect.minus.textContent);
                console.log(`Stored Operator:${currentCalc.operator}`);
            }
            break;

        case ("times"):
            currentCalc.equalsPressed = false;
            if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);

                console.log(currentCalc.value1, currentCalc.value2);

                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);

                console.log(result);

                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.times.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);

                console.log(currentCalc.storeValue1, currentCalc.operator,currentCalc.storeValue2);
            } else if (currentCalc.operator){
                console.log(`Operator before replaced`)
                changeDOM.replaceOperator(nodeSelect.times.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                console.log(`Operator after replaced`)
            } else {
                changeDOM.incrementDisplay(nodeSelect.times.textContent);
                changeDOM.storeOperator(nodeSelect.times.textContent);
                console.log(`Stored Operator:${currentCalc.operator}`);
            }
            break;

        case ("dividedBy"):
            currentCalc.equalsPressed = false;
            if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);

                console.log(currentCalc.value1, currentCalc.value2);

                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);

                console.log(result);

                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.dividedBy.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);

                console.log(currentCalc.storeValue1, currentCalc.operator,currentCalc.storeValue2);
            } else if (currentCalc.operator){
                console.log(`Operator before replaced`)
                changeDOM.replaceOperator(nodeSelect.dividedBy.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                console.log(`Operator after replaced`)
            } else {
                changeDOM.incrementDisplay(nodeSelect.dividedBy.textContent);
                changeDOM.storeOperator(nodeSelect.dividedBy.textContent);
                console.log(`Stored Operator:${currentCalc.operator}`);
            }
            break;

        case ("oneBtn"):
            // if equalspressed is true, we update OR clear + incremenent
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.oneBtn.textContent);
                changeDOM.storeValue(nodeSelect.oneBtn.textContent);
                currentCalc.equalsPressed = false;
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            } else if (currentCalc.equalsPressed === false) {
                // Update display w/ button value
                changeDOM.incrementDisplay(nodeSelect.oneBtn.textContent);

                // Concat button value to our value holder
                changeDOM.storeValue(nodeSelect.oneBtn.textContent);
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            }
            break;

        case ("twoBtn"):
            // if equalspressed is true, we update OR clear + incremenent
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.twoBtn.textContent);
                changeDOM.storeValue(nodeSelect.twoBtn.textContent);
                currentCalc.equalsPressed = false;
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            } else if (currentCalc.equalsPressed === false) {
                // Update display w/ button value
                changeDOM.incrementDisplay(nodeSelect.twoBtn.textContent);

                // Concat button value to our value holder
                changeDOM.storeValue(nodeSelect.twoBtn.textContent);
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            }
            break;
        
        case ("threeBtn"):
            // if equalspressed is true, we update OR clear + incremenent
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.threeBtn.textContent);
                changeDOM.storeValue(nodeSelect.threeBtn.textContent);
                currentCalc.equalsPressed = false;
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            } else if (currentCalc.equalsPressed === false) {
                // Update display w/ button value
                changeDOM.incrementDisplay(nodeSelect.threeBtn.textContent);

                // Concat button value to our value holder
                changeDOM.storeValue(nodeSelect.threeBtn.textContent);
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            }
            break;

        case ("fourBtn"):
            // if equalspressed is true, we update OR clear + incremenent
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.fourBtn.textContent);
                changeDOM.storeValue(nodeSelect.fourBtn.textContent);
                currentCalc.equalsPressed = false;
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            } else if (currentCalc.equalsPressed === false) {
                // Update display w/ button value
                changeDOM.incrementDisplay(nodeSelect.fourBtn.textContent);

                // Concat button value to our value holder
                changeDOM.storeValue(nodeSelect.fourBtn.textContent);
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            }
            break;

        case ("fiveBtn"):
            // if equalspressed is true, we update OR clear + incremenent
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.fiveBtn.textContent);
                changeDOM.storeValue(nodeSelect.fiveBtn.textContent);
                currentCalc.equalsPressed = false;
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            } else if (currentCalc.equalsPressed === false) {
                // Update display w/ button value
                changeDOM.incrementDisplay(nodeSelect.fiveBtn.textContent);

                // Concat button value to our value holder
                changeDOM.storeValue(nodeSelect.fiveBtn.textContent);
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            }
            break;

        case ("sixBtn"):
            // if equalspressed is true, we update OR clear + incremenent
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.sixBtn.textContent);
                changeDOM.storeValue(nodeSelect.sixBtn.textContent);
                currentCalc.equalsPressed = false;
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            } else if (currentCalc.equalsPressed === false) {
                // Update display w/ button value
                changeDOM.incrementDisplay(nodeSelect.sixBtn.textContent);

                // Concat button value to our value holder
                changeDOM.storeValue(nodeSelect.sixBtn.textContent);
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            }
            break;

        case ("sevenBtn"):
            // if equalspressed is true, we update OR clear + incremenent
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.sevenBtn.textContent);
                changeDOM.storeValue(nodeSelect.sevenBtn.textContent);
                currentCalc.equalsPressed = false;
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            } else if (currentCalc.equalsPressed === false) {
                // Update display w/ button value
                changeDOM.incrementDisplay(nodeSelect.sevenBtn.textContent);

                // Concat button value to our value holder
                changeDOM.storeValue(nodeSelect.sevenBtn.textContent);
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            }
            break;
        
        case ("eightBtn"):
            // if equalspressed is true, we update OR clear + incremenent
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.eightBtn.textContent);
                changeDOM.storeValue(nodeSelect.eightBtn.textContent);
                currentCalc.equalsPressed = false;
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            } else if (currentCalc.equalsPressed === false) {
                // Update display w/ button value
                changeDOM.incrementDisplay(nodeSelect.eightBtn.textContent);

                // Concat button value to our value holder
                changeDOM.storeValue(nodeSelect.eightBtn.textContent);
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            }
            break;
        
        case ("nineBtn"):
            // if equalspressed is true, we update OR clear + incremenent
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.nineBtn.textContent);
                changeDOM.storeValue(nodeSelect.nineBtn.textContent);
                currentCalc.equalsPressed = false;
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            } else if (currentCalc.equalsPressed === false) {
                // Update display w/ button value
                changeDOM.incrementDisplay(nodeSelect.nineBtn.textContent);

                // Concat button value to our value holder
                changeDOM.storeValue(nodeSelect.nineBtn.textContent);
                console.log(`Store Value 1:${currentCalc.storeValue1}`);
                console.log(`Store Value 2:${currentCalc.storeValue2}`);
            }
            break;
    }
});