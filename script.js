const DEFAULT_VALUE = '';

let currentValue = DEFAULT_VALUE;

const screenPara = document.getElementById('calculations');

function addNewValue(value) {
    if (currentValue[currentValue.length - 2] !== '.') {
        currentValue += value;
        screenPara.innerHTML = currentValue;
    } else {
        return
    }
}

function addNewAction(value) {
    if (currentValue[currentValue.length - 1] !== '+' && currentValue[currentValue.length - 1] !== '-' && currentValue[currentValue.length - 1] !== '√' && currentValue[currentValue.length - 1] !== '*' && currentValue[currentValue.length - 1] !== '^' && currentValue[currentValue.length - 1] !== '/' && currentValue[currentValue.length - 1] !== '.' && currentValue.length !== 0) {
        currentValue += value;
        screenPara.innerHTML = currentValue;
    } else if (currentValue.length === 0) {
        return;
    } else {
        currentValue = currentValue.slice(0, -1);
        currentValue += value;
        screenPara.innerHTML = currentValue;
    }
}

function addDecimalPoint() {
    if (currentValue[currentValue.length - 1] === '+' || currentValue[currentValue.length - 1] === '-' || currentValue[currentValue.length - 1] === '√' || currentValue[currentValue.length - 1] === '*' || currentValue[currentValue.length - 1] === '^' || currentValue[currentValue.length - 1] === '/' || currentValue.length === 0) {
        currentValue += '0.';
        screenPara.innerHTML = currentValue;
    } else if (currentValue[currentValue.length - 1] === '.') {
        currentValue = currentValue.slice(0, -1);
        screenPara.innerHTML = currentValue;
    } else if (currentValue[currentValue.length - 2] === '.') {
        screenPara.innerHTML = currentValue;
    } else {
        currentValue += '.'
        screenPara.innerHTML = currentValue;
    }
}

function removeOldValue() {
    currentValue = currentValue.slice(0, -1);
    screenPara.innerHTML = currentValue;
}

function clearOldValues() {
    currentValue = '';
    screenPara.innerHTML = currentValue;
}

function solveEquasion(result = 0) {
    console.log(screenPara.innerHTML);
}

const eraseButton = document.getElementById('erase');
const additionButton = document.getElementById('addition');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');
const clearButton = document.getElementById('clear');
const subtractionButton = document.getElementById('subtraction');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sqrtButton = document.getElementById('sqrt');
const multiplyButton = document.getElementById('multiply');
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const powerButton = document.getElementById('power');
const divisionButton = document.getElementById('division');
const zeroButton = document.getElementById('zero');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');

eraseButton.onclick = () => {removeOldValue()};
additionButton.onclick = () => {addNewAction('+')};
sevenButton.onclick = () => {addNewValue('7')};
eightButton.onclick = () => {addNewValue('8')};
nineButton.onclick = () => {addNewValue('9')};
clearButton.onclick = () => {clearOldValues()};
subtractionButton.onclick = () => {addNewAction('-')};
fourButton.onclick = () => {addNewValue('4')};
fiveButton.onclick = () => {addNewValue('5')};
sixButton.onclick = () => {addNewValue('6')};
sqrtButton.onclick = () => {addNewAction('√')};
multiplyButton.onclick = () => {addNewAction('*')};
oneButton.onclick = () => {addNewValue('1')};
twoButton.onclick = () => {addNewValue('2')};
threeButton.onclick = () => {addNewValue('3')};
powerButton.onclick = () => {addNewAction('^')};
divisionButton.onclick = () => {addNewAction('/')};
zeroButton.onclick = () => {addNewValue('0')};
decimalButton.onclick = () => {addDecimalPoint()};
equalsButton.onclick = () => {solveEquasion()};
