// Project: Calculator

let mathOperations = {
    add: function (num1, num2) {
        let sum = (num1+ num2);
        if (currentCalc.storeValue1.includes(".") || currentCalc.storeValue2.includes(".")){
            return sum.toFixed(3);
        }
        return sum;
    },
    subtract: function (num1, num2) {
        let difference = (num1 - num2);
        if (currentCalc.storeValue1.includes(".") || currentCalc.storeValue2.includes(".")){
            return difference.toFixed(3);
        }
        return difference;
    },
    multiply: function (num1, num2) {
        let product = (num1 * num2);
        if (currentCalc.storeValue1.includes(".") || currentCalc.storeValue2.includes(".")){
            return product.toFixed(3);
        }
        return product
    },
    divide: function (num1, num2) {
        let quotient = (num1 / num2);
        return quotient.toFixed(3);
    },
}

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
    zeroBtn: document.querySelector("#zeroBtn"),
    decimal: document.querySelector("#decimal"),
    backspace: document.querySelector("#backspace"),
    happy: document.querySelector("#happy")
}

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
    backSpace: function(value){
        let length = value.length;
        let toLastChar = (length -1);
        let decimalCheck = value.slice(-1);
        
        // Decimal Button Control
        if (decimalCheck === ".") nodeSelect.decimal.disabled = false;
        if (currentCalc.storeValue1.includes(".") && decimalCheck === "+") nodeSelect.decimal.disabled = true;
        if (currentCalc.storeValue1.includes(".") && decimalCheck === "-") nodeSelect.decimal.disabled = true;
        if (currentCalc.storeValue1.includes(".") && decimalCheck === "*") nodeSelect.decimal.disabled = true;
        if (currentCalc.storeValue1.includes(".") && decimalCheck === "/") nodeSelect.decimal.disabled = true;

        value = value.slice(0, toLastChar);
        return value;
    },
}

nodeSelect.calculator.addEventListener("click", () => {
    let target = event.target;

    switch(target.id) {     
        case ("happy"):
            alert("You won't get better if you don't try, keep going!");
            break;

        case ("backspace"):
            if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                currentCalc.storeValue2 = changeDOM.backSpace(currentCalc.storeValue2);
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                changeDOM.incrementDisplay(currentCalc.storeValue2);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.storeValue1, currentCalc.operator){
                currentCalc.operator = changeDOM.backSpace(currentCalc.operator);
                changeDOM.updateDisplay(currentCalc.storeValue1);
                currentCalc.equalsPressed = false;
            } else {
                currentCalc.storeValue1 = changeDOM.backSpace(currentCalc.storeValue1);
                changeDOM.updateDisplay(currentCalc.storeValue1);
                currentCalc.equalsPressed = false;
            }

            break;
            
        case ("decimal"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.decimal.textContent);
                changeDOM.storeValue(nodeSelect.decimal.textContent);
                currentCalc.equalsPressed = false;
                nodeSelect.decimal.disabled = true;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.decimal.textContent);
                changeDOM.storeValue(nodeSelect.decimal.textContent);

                nodeSelect.decimal.disabled = true;
            }
            break;

        case ("clear"):
            currentCalc.equalsPressed = false;
            changeDOM.resetDisplay();
            changeDOM.removeAllStored();
            nodeSelect.decimal.disabled = false;
            break;

        case ("equalsBtn"):
            if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                currentCalc.equalsPressed = true;
                if (currentCalc.operator === "/" && currentCalc.storeValue2 === "0" ) {
                    changeDOM.updateDisplay("*dies...*");
                    nodeSelect.decimal.disabled = false;
                } else {
                    changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);
                    let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                    changeDOM.updateDisplay(result);
                    currentCalc.storeValue1 = result;
                    changeDOM.removeSomeStored();
                    nodeSelect.decimal.disabled = false;
                }
            }
            break;
        
        case ("plus"):
            currentCalc.equalsPressed = false;
            if (currentCalc.operator === "/" && currentCalc.storeValue2 === "0") {
                changeDOM.updateDisplay("*dies...*");
                currentCalc.equalsPressed = true;
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);
                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.plus.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.operator){
                changeDOM.replaceOperator(nodeSelect.plus.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else {
                changeDOM.incrementDisplay(nodeSelect.plus.textContent);
                changeDOM.storeOperator(nodeSelect.plus.textContent);
                nodeSelect.decimal.disabled = false;
            }
            break;

        case ("minus"):
            currentCalc.equalsPressed = false;
            if (currentCalc.operator === "/" && currentCalc.storeValue2 === "0") {
                changeDOM.updateDisplay("*dies...*");
                currentCalc.equalsPressed = true;
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);
                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.minus.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.operator){
                changeDOM.replaceOperator(nodeSelect.minus.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else {
                changeDOM.incrementDisplay(nodeSelect.minus.textContent);
                changeDOM.storeOperator(nodeSelect.minus.textContent);
                nodeSelect.decimal.disabled = false;
            }
            break;

        case ("times"):
            currentCalc.equalsPressed = false;
            if (currentCalc.operator === "/" && currentCalc.storeValue2 === "0") {
                changeDOM.updateDisplay("*dies...*");
                currentCalc.equalsPressed = true;
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);
                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.times.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.operator){
                changeDOM.replaceOperator(nodeSelect.times.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else {
                changeDOM.incrementDisplay(nodeSelect.times.textContent);
                changeDOM.storeOperator(nodeSelect.times.textContent);
                nodeSelect.decimal.disabled = false;
            }
            break;

        case ("dividedBy"):
            currentCalc.equalsPressed = false;
            if (currentCalc.operator === "/" && currentCalc.storeValue2 === "0") {
                changeDOM.updateDisplay("*dies...*");
                currentCalc.equalsPressed = true;
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);
                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.dividedBy.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.operator){
                changeDOM.replaceOperator(nodeSelect.dividedBy.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else {
                changeDOM.incrementDisplay(nodeSelect.dividedBy.textContent);
                changeDOM.storeOperator(nodeSelect.dividedBy.textContent);
                nodeSelect.decimal.disabled = false;
            }
            break;

        case ("zeroBtn"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.zeroBtn.textContent);
                changeDOM.storeValue(nodeSelect.zeroBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.zeroBtn.textContent);
                changeDOM.storeValue(nodeSelect.zeroBtn.textContent);
            }
            break;

        case ("oneBtn"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.oneBtn.textContent);
                changeDOM.storeValue(nodeSelect.oneBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.oneBtn.textContent);
                changeDOM.storeValue(nodeSelect.oneBtn.textContent);
            }
            break;

        case ("twoBtn"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.twoBtn.textContent);
                changeDOM.storeValue(nodeSelect.twoBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.twoBtn.textContent);
                changeDOM.storeValue(nodeSelect.twoBtn.textContent);
            }
            break;
        
        case ("threeBtn"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.threeBtn.textContent);
                changeDOM.storeValue(nodeSelect.threeBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.threeBtn.textContent);
                changeDOM.storeValue(nodeSelect.threeBtn.textContent);
            }
            break;

        case ("fourBtn"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.fourBtn.textContent);
                changeDOM.storeValue(nodeSelect.fourBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.fourBtn.textContent);
                changeDOM.storeValue(nodeSelect.fourBtn.textContent);
            }
            break;

        case ("fiveBtn"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.fiveBtn.textContent);
                changeDOM.storeValue(nodeSelect.fiveBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.fiveBtn.textContent);
                changeDOM.storeValue(nodeSelect.fiveBtn.textContent);
            }
            break;

        case ("sixBtn"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.sixBtn.textContent);
                changeDOM.storeValue(nodeSelect.sixBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.sixBtn.textContent);
                changeDOM.storeValue(nodeSelect.sixBtn.textContent);
            }
            break;

        case ("sevenBtn"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.sevenBtn.textContent);
                changeDOM.storeValue(nodeSelect.sevenBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.sevenBtn.textContent);
                changeDOM.storeValue(nodeSelect.sevenBtn.textContent);
            }
            break;
        
        case ("eightBtn"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.eightBtn.textContent);
                changeDOM.storeValue(nodeSelect.eightBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.eightBtn.textContent);
                changeDOM.storeValue(nodeSelect.eightBtn.textContent);
            }
            break;
        
        case ("nineBtn"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.nineBtn.textContent);
                changeDOM.storeValue(nodeSelect.nineBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.nineBtn.textContent);
                changeDOM.storeValue(nodeSelect.nineBtn.textContent);
            }
            break;
    }
});

document.addEventListener("keydown", () => {
    let key = event.key;
    
    switch(key){
        case ("Enter"):
            if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                currentCalc.equalsPressed = true;
                if (currentCalc.operator === "/" && currentCalc.storeValue2 === "0" ) {
                    changeDOM.updateDisplay("*dies...*");
                    nodeSelect.decimal.disabled = false;
                } else {
                    changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);
                    let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                    changeDOM.updateDisplay(result);
                    currentCalc.storeValue1 = result;
                    changeDOM.removeSomeStored();
                    nodeSelect.decimal.disabled = false;
                }
            }
            break;

        case("0"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.zeroBtn.textContent);
                changeDOM.storeValue(nodeSelect.zeroBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.zeroBtn.textContent);
                changeDOM.storeValue(nodeSelect.zeroBtn.textContent);
            }
            break;
        
        case("."):
            if (nodeSelect.decimal.disabled){
                event.preventDefault();
            } else if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.decimal.textContent);
                changeDOM.storeValue(nodeSelect.decimal.textContent);
                currentCalc.equalsPressed = false;
                nodeSelect.decimal.disabled = true;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.decimal.textContent);
                changeDOM.storeValue(nodeSelect.decimal.textContent);
                nodeSelect.decimal.disabled = true;
            }
            break;
        
        case("Backspace"):
            if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                currentCalc.storeValue2 = changeDOM.backSpace(currentCalc.storeValue2);
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                changeDOM.incrementDisplay(currentCalc.storeValue2);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.storeValue1, currentCalc.operator){
                currentCalc.operator = changeDOM.backSpace(currentCalc.operator);
                changeDOM.updateDisplay(currentCalc.storeValue1);
                currentCalc.equalsPressed = false;
            } else {
                currentCalc.storeValue1 = changeDOM.backSpace(currentCalc.storeValue1);
                changeDOM.updateDisplay(currentCalc.storeValue1);
                currentCalc.equalsPressed = false;
            }

            break;
        
        case("1"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.oneBtn.textContent);
                changeDOM.storeValue(nodeSelect.oneBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.oneBtn.textContent);
                changeDOM.storeValue(nodeSelect.oneBtn.textContent);
            }
            break;

        case("2"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.twoBtn.textContent);
                changeDOM.storeValue(nodeSelect.twoBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.twoBtn.textContent);
                changeDOM.storeValue(nodeSelect.twoBtn.textContent);
            }
            break;

        case("3"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.threeBtn.textContent);
                changeDOM.storeValue(nodeSelect.threeBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.threeBtn.textContent);
                changeDOM.storeValue(nodeSelect.threeBtn.textContent);
            }
            break;

        case ("+"):
            currentCalc.equalsPressed = false;
            if (currentCalc.operator === "/" && currentCalc.storeValue2 === "0") {
                changeDOM.updateDisplay("*dies...*");
                currentCalc.equalsPressed = true;
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);
                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.plus.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.operator){
                changeDOM.replaceOperator(nodeSelect.plus.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else {
                changeDOM.incrementDisplay(nodeSelect.plus.textContent);
                changeDOM.storeOperator(nodeSelect.plus.textContent);
                nodeSelect.decimal.disabled = false;
            }
            break;
        
        case("4"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.fourBtn.textContent);
                changeDOM.storeValue(nodeSelect.fourBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.fourBtn.textContent);
                changeDOM.storeValue(nodeSelect.fourBtn.textContent);
            }
            break;

        case("5"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.fiveBtn.textContent);
                changeDOM.storeValue(nodeSelect.fiveBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.fiveBtn.textContent);
                changeDOM.storeValue(nodeSelect.fiveBtn.textContent);
            }
            break;

        case("6"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.sixBtn.textContent);
                changeDOM.storeValue(nodeSelect.sixBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.sixBtn.textContent);
                changeDOM.storeValue(nodeSelect.sixBtn.textContent);
            }
            break;

        case ("-"):
            currentCalc.equalsPressed = false;
            if (currentCalc.operator === "/" && currentCalc.storeValue2 === "0") {
                changeDOM.updateDisplay("*dies...*");
                currentCalc.equalsPressed = true;
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);
                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.minus.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.operator){
                changeDOM.replaceOperator(nodeSelect.minus.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else {
                changeDOM.incrementDisplay(nodeSelect.minus.textContent);
                changeDOM.storeOperator(nodeSelect.minus.textContent);
                nodeSelect.decimal.disabled = false;
            }
            break;

        case("7"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.sevenBtn.textContent);
                changeDOM.storeValue(nodeSelect.sevenBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.sevenBtn.textContent);
                changeDOM.storeValue(nodeSelect.sevenBtn.textContent);
            }
            break;

        case("8"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.eightBtn.textContent);
                changeDOM.storeValue(nodeSelect.eightBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.eightBtn.textContent);
                changeDOM.storeValue(nodeSelect.eightBtn.textContent);
            }
            break;

        case("9"):
            if (currentCalc.equalsPressed === true){
                changeDOM.removeAllStored();    
                changeDOM.updateDisplay(nodeSelect.nineBtn.textContent);
                changeDOM.storeValue(nodeSelect.nineBtn.textContent);
                currentCalc.equalsPressed = false;
            } else if (currentCalc.equalsPressed === false) {
                changeDOM.incrementDisplay(nodeSelect.nineBtn.textContent);
                changeDOM.storeValue(nodeSelect.nineBtn.textContent);
            }
            break;

        case ("*"):
            currentCalc.equalsPressed = false;
            if (currentCalc.operator === "/" && currentCalc.storeValue2 === "0") {
                changeDOM.updateDisplay("*dies...*");
                currentCalc.equalsPressed = true;
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);
                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.times.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.operator){
                changeDOM.replaceOperator(nodeSelect.times.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else {
                changeDOM.incrementDisplay(nodeSelect.times.textContent);
                changeDOM.storeOperator(nodeSelect.times.textContent);
                nodeSelect.decimal.disabled = false;
            }
            break;
        
        case ("Delete"):
            currentCalc.equalsPressed = false;
            changeDOM.resetDisplay();
            changeDOM.removeAllStored();
            nodeSelect.decimal.disabled = false;
            break;

        case ("/"):
            currentCalc.equalsPressed = false;
            if (currentCalc.operator === "/" && currentCalc.storeValue2 === "0") {
                changeDOM.updateDisplay("*dies...*");
                currentCalc.equalsPressed = true;
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.storeValue1, currentCalc.operator, currentCalc.storeValue2){
                changeDOM.convertToNumber(currentCalc.storeValue1, currentCalc.storeValue2);
                let result = (`${currentCalc.calcOperate(currentCalc.value1, currentCalc.operator, currentCalc.value2)}`);
                currentCalc.storeValue1 = result;
                currentCalc.operator = nodeSelect.dividedBy.textContent;
                changeDOM.removeStoreValue2();
                changeDOM.updateDisplay(result);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else if (currentCalc.operator){
                changeDOM.replaceOperator(nodeSelect.dividedBy.textContent)
                changeDOM.updateDisplay(currentCalc.storeValue1);
                changeDOM.incrementDisplay(currentCalc.operator);
                nodeSelect.decimal.disabled = false;
            } else {
                changeDOM.incrementDisplay(nodeSelect.dividedBy.textContent);
                changeDOM.storeOperator(nodeSelect.dividedBy.textContent);
                nodeSelect.decimal.disabled = false;
            }
            break;
    }
});