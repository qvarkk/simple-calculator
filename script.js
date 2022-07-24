let currentValue = '0';
let currentCalc = 0;

let screenCalc = document.getElementById('calculations');
let screenRecent = document.getElementById('recent');

function addNewValue(value) {
    checkAction('adding value');
    if (screenCalc.innerHTML !== '0') {
        screenCalc.innerHTML += value;
    } else {
        screenCalc.innerHTML = value;
    }
}

function addNewAction(operator) {
    if (checkAction('operating')) {
        operate(operator);
    } else {
        screenRecent.innerHTML = currentCalc + operator;
    }
}

function clearScreen() {
    screenCalc.innerHTML = '0';
    screenRecent.innerHTML = '0';
    currentCalc = 0;
    lastAction = '';
    lastOperator = '';
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
clearButton.onclick = () => {clearScreen()};
eraseButton.onclick = () => {removeOldValue()};
//operators
additionButton.onclick = () => {addNewAction('+')};
subtractionButton.onclick = () => {addNewAction('-')};
multiplyButton.onclick = () => {addNewAction('*')};
divisionButton.onclick = () => {addNewAction('/')};
//numbers
oneButton.onclick = () => {addNewValue('1')};
twoButton.onclick = () => {addNewValue('2')};
threeButton.onclick = () => {addNewValue('3')};
fourButton.onclick = () => {addNewValue('4')};
fiveButton.onclick = () => {addNewValue('5')};
sixButton.onclick = () => {addNewValue('6')};
sevenButton.onclick = () => {addNewValue('7')};
eightButton.onclick = () => {addNewValue('8')};
nineButton.onclick = () => {addNewValue('9')};
zeroButton.onclick = () => {addNewValue('0')};
//special
decimalButton.onclick = () => {addDecimalPoint()};
equalsButton.onclick = () => {addNewAction('=')};

let lastAction = 'operating';
function checkAction(action) {
    if (lastAction === 'operating') {
        lastAction = action;
        return false;
    } else {
        lastAction = action;
        return true;
    }
}

let lastOperator = '';
function doAction(a, b) {
    if (lastOperator === '+') {
        currentCalc = b + a;
    } else if (lastOperator === '-') {
        currentCalc = b - a;
    } else if (lastOperator === '*') {
        currentCalc = b * a;
    } else if (lastOperator === '/') { 
        currentCalc = b / a;
    } else {
        currentCalc = screenCalc.innerHTML;
    }
}

function operate(operator) {
    let a = parseFloat(screenCalc.innerHTML);
    let b = parseFloat(screenRecent.innerHTML.slice(0,-1));
    doAction(a, b);
    if (operator !== '=') {
        screenRecent.innerHTML = currentCalc + operator;
        lastOperator = operator;
        screenCalc.innerHTML = '0';
    } else {
        screenRecent.innerHTML = b + lastOperator + a + '='
        lastOperator = '='
        screenCalc.innerHTML = currentCalc
    }
}