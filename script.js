const DEFAULT_VALUE = '0';

let currentValue = DEFAULT_VALUE;
let currentCalc = 0;

const screenPara = document.getElementById('calculations');

function addNewValue() {
    
}

//removing
const eraseButton = document.getElementById('erase');
const clearButton = document.getElementById('clear');
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
eraseButton.onclick = () => {removeOldValue()};
clearButton.onclick = () => {clearOldValues()};
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
equalsButton.onclick = () => {solveEquasion()};
