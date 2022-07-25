//paragraphs that show 
let screenNow = document.getElementById('calculations');
let screenRecent = document.getElementById('recent');

//variables to store states
let lastAction = 'number';
let lastOperator = '';

//variables to store values to do math
let valueEnteredBefore = 0;
let valueEnteredNow = 0;

//removing

function returnToDefault() {
    lastAction = 'number';
    lastOperator = '';
    valueEnteredBefore = 0;
    valueEnteredNow = 0;
    screenNow.innerHTML = valueEnteredNow;
    screenRecent.innerHTML = valueEnteredBefore;
    screenRecent.classList.add('transparent');
}

function removeLastNumber() {
    valueEnteredNow = valueEnteredNow.slice(0,-1);
    screenNow.innerHTML = valueEnteredNow;    
}

//operators

function getOperatorInput(operator) {
    screenRecent.classList.remove('transparent');
    if (lastAction === 'number') {
        if (lastOperator === '') { //makes it properly work in the beginning and after clearing
            screenNow.innerHTML = valueEnteredNow;
            valueEnteredBefore = valueEnteredNow;

            screenRecent.innerHTML = valueEnteredBefore + operator;

            lastOperator = operator;
            lastAction = 'operator';
        } else {
            screenRecent.innerHTML = operate(lastOperator, valueEnteredBefore, valueEnteredNow) + operator;
            screenNow.innerHTML = operate(lastOperator, valueEnteredBefore, valueEnteredNow);
            
            valueEnteredNow = screenNow.innerHTML;
            valueEnteredBefore = valueEnteredNow;

            lastOperator = operator;
            lastAction = 'operator';
        }
    } else if (lastAction === 'operator') {
        screenRecent.innerHTML = valueEnteredNow + operator;

        lastOperator = operator;
        lastAction = 'operator';
    } else if (lastAction === 'equals') {
        valueEnteredBefore = screenNow.innerHTML;
        screenRecent.innerHTML = screenNow.innerHTML + operator;

        lastOperator = operator;
        lastAction = 'operator';
    } else if (lastAction === 'decimal') { 
        if (lastOperator === '') { //makes it properly work in the beginning and after clearing
            screenNow.innerHTML = valueEnteredNow + '0';
            valueEnteredBefore = valueEnteredNow + '0';

            screenRecent.innerHTML = valueEnteredBefore + operator;

            lastOperator = operator;
            lastAction = 'operator';
        } else {
            screenRecent.innerHTML = operate(lastOperator, valueEnteredBefore, valueEnteredNow) + '0' + operator;
            screenNow.innerHTML = operate(lastOperator, valueEnteredBefore, valueEnteredNow) + '0';
            
            valueEnteredNow = screenNow.innerHTML + '0';
            valueEnteredBefore = valueEnteredNow + '0';

            lastOperator = operator;
            lastAction = 'operator';
        }
    } else {
        return;
    }
}

//numbers

function getNumberInput(number) {
    if (lastAction === 'operator' || screenNow.innerHTML === '0') {
        screenNow.innerHTML = number;
        valueEnteredNow = screenNow.innerHTML;

        lastAction = 'number';
    } else if (lastAction === 'equals') { 
        returnToDefault();

        screenNow.innerHTML = number;

        valueEnteredNow = screenNow.innerHTML;
        lastAction = 'number';
    } else {
        screenNow.innerHTML += number;
        valueEnteredNow = screenNow.innerHTML;

        lastAction = 'number';
    }
}

//special
function addDecimalPoint() {
    if (lastAction === 'number') {
        screenNow.innerHTML += '.';
        valueEnteredNow = screenNow.innerHTML;

        lastAction = 'decimal';
    } else if (lastAction === 'equals') {
        returnToDefault();

        screenNow.innerHTML = '0.';

        valueEnteredNow = screenNow.innerHTML;
        lastAction = 'decimal';
    } else if (lastAction === 'operator') {
        screenNow.innerHTML = '0.';

        valueEnteredNow = screenNow.innerHTML;
        lastAction = 'decimal';
    }
}


function finishEquasion() {
    screenRecent.classList.remove('transparent');
    if (lastOperator !== '') {
        if (lastAction === 'number' || lastAction === 'decimal') {
            screenNow.innerHTML = operate(lastOperator, valueEnteredBefore, valueEnteredNow);
            screenRecent.innerHTML = `${valueEnteredBefore}${lastOperator}${valueEnteredNow}=`
            lastAction = 'equals';
        } else if (lastAction === 'operator') {
            screenRecent.innerHTML = screenNow.innerHTML + '=';
        }
    } else {
        return;
    }
}


//removing
const clearButton = document.getElementById('clear');
const eraseButton = document.getElementById('erase');
//operators
const additionButton = document.getElementById('addition');
const subtractionButton = document.getElementById('subtraction');
const divisionButton = document.getElementById('division');
const multiplyButton = document.getElementById('multiply');
//numbers
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');
const zeroButton = document.getElementById('zero');
//special
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');

//removing
clearButton.onclick = () => {returnToDefault()};
eraseButton.onclick = () => {removeLastNumber()};
//operators
additionButton.onclick = () => {getOperatorInput('+')};
subtractionButton.onclick = () => {getOperatorInput('-')};
multiplyButton.onclick = () => {getOperatorInput('*')};
divisionButton.onclick = () => {getOperatorInput('/')};
//numbers
oneButton.onclick = () => {getNumberInput('1')};
twoButton.onclick = () => {getNumberInput('2')};
threeButton.onclick = () => {getNumberInput('3')};
fourButton.onclick = () => {getNumberInput('4')};
fiveButton.onclick = () => {getNumberInput('5')};
sixButton.onclick = () => {getNumberInput('6')};
sevenButton.onclick = () => {getNumberInput('7')};
eightButton.onclick = () => {getNumberInput('8')};
nineButton.onclick = () => {getNumberInput('9')};
zeroButton.onclick = () => {getNumberInput('0')};
//special
decimalButton.onclick = () => {addDecimalPoint()};
equalsButton.onclick = () => {finishEquasion()};

//functions
function operate(operator, a, b) {
    if (operator === '+') {
        return parseFloat(a) + parseFloat(b);
    } else if (operator === '-') {
        return parseFloat(a) - parseFloat(b);
    } else if (operator === '*') {
        return parseFloat(a) * parseFloat(b);
    } else if (operator === '/') {
        return parseFloat(a) / parseFloat(b);
    } else if (operator === '=') {
        return parseFloat(b);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'c') clearButton.click();
    if (event.key === 'Backspace') eraseButton.click();
    if (event.key === '+') additionButton.click();
    if (event.key === '-') subtractionButton.click();
    if (event.key === '*') multiplyButton.click();
    if (event.key === '/') divisionButton.click();
    if (event.key === '1') oneButton.click();
    if (event.key === '2') twoButton.click();
    if (event.key === '3') threeButton.click();
    if (event.key === '4') fourButton.click();
    if (event.key === '5') fiveButton.click();
    if (event.key === '6') sixButton.click();
    if (event.key === '7') sevenButton.click();
    if (event.key === '8') eightButton.click();
    if (event.key === '9') nineButton.click();
    if (event.key === '0') zeroButton.click();
    if (event.key === '.') decimalButton.click();
    if (event.key === 'Enter') equalsButton.click();
});

let intervalId = window.setInterval(function(){
    if (screenNow.innerHTML.length > 11) {
        alert('Max char limit reached. To prevent anything from breaking calculator will be restarted!');
        returnToDefault();
    } else if (screenRecent.innerHTML.length > 16) {
        alert('Max char limit reached. To prevent anything from breaking calculator will be restarted!');
        returnToDefault();
    }
  }, 500);