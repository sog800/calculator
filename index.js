const numberButtons = document.querySelectorAll("button");
const displayAnswer = document.querySelector('#answer-el');
const display = document.querySelector('#expression-el');
let expression = '';
let firstNumber = 0;
let operator = '';
let secondNumber = 0;
let answer = 0;
let copy = '';
let otherOperators = ["dell", "ca","paste","copy",".","Ans"];

numberButtons.forEach((button) => {
    button.addEventListener('click', function () {
        
        if (button.id === "=") {
            answer = operate(firstNumber, operator, secondNumber);
            displayAnswer.textContent = answer;
            display.textContent = '';
            expression = '';
            operator = '';
            firstNumber = 0;
            secondNumber = 0;
        }else if (button.id === "ans"){
            expression += answer;
            separationOfNumbers();
            display.textContent = expression;
        }else if (button.id === "ca"){
            displayAnswer.textContent = 0;
            display.textContent = '';
            expression = '';
            operator = '';
            firstNumber = 0;
            secondNumber = 0;
            answer = 0;
        }else if (button.id === "copy"){
            copy = display.textContent;
        }else if (button.id === "paste"){
            expression = copy;
            separationOfNumbers();
            display.textContent = expression;
        }else if (operator.length !== 0 && isNaN(button.id) && !otherOperators.includes(button.id)) {
            answer = operate(firstNumber, operator, secondNumber);
            displayAnswer.textContent = answer;
            display.textContent = '';
            expression = '';
            operator = '';
            firstNumber = 0;
            secondNumber = 0;
            expression = String(answer);
            expression += button.id;
            display.textContent = expression;        
        }else if (button.id === "dell") {
            expression = expression.slice(0, -1);
            display.textContent = expression;
        }else if (expression.length === 0 && (isNaN(button.id)) && button.id !== "."){
            if (answer === "MATH ERROR"){answer = 0;}
            expression = String(answer);
            expression += button.id;
            display.textContent = expression;
        }else if (button.id === ".") {
            if (expression.length === 0) {
                expression += '0.';
            }else {
                expression += '.';
            }
            display.textContent = expression;
        }else {
            expression += button.id;
            display.textContent = expression;
            separationOfNumbers();
        }
    })
})

function separationOfNumbers() {
    let store1 = "";
    let store2 = '';
    let firstNumIsNegative = false;
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "radic") {
            operator = "radic"
            for (let x = (i + 1); x < expression.length; x++){
                store1 += expression[x];
                firstNumber = Number(store1);
            }
            break;
        }
        if (i === 0 && expression[i] === '-') {
            firstNumIsNegative = true;
            store1 += '-';
        } else if ((!(isNaN(expression[i])) || expression[i] === ".") && operator.length === 0) {
            store1 += expression[i];
            firstNumber = Number(store1);
        } else if (i > 0 && (!(isNaN(expression[i])) || expression[i] === '.') && operator.length === 1) {
            store2 += expression[i];
            secondNumber = Number(store2);
        } else {
            operator = expression[i];
            store2 = '';
        }
    }
    if (firstNumIsNegative && store1 === '-') {
        firstNumber = -0;
    }
}
function squireRoot (num) {
    let root = 0;
    root = Math.sqrt(num)
}
function power (num = 0, num2 = 0) {
    let pow = 0;
    pow = num ** num2;
    return pow;
}
function module(num = 0, num2 = 0) {
    if (num2 === 0){return "MATH ERROR";}
    remainder = num % num2;
    return remainder;
}
function subtract(num = 0, num2 = 0){
    let difference = 0;
    return difference = num - num2;
}
function add (num = 0, num2 = 0) {
    let sum = 0;
    return sum = num + num2;
}
function multiply (num = 0, num2 = 0) {
    let product = 0;
    return product = num * num2;
}
function divide (num = 0, num2 = 0) {
    if (num != 0 && num2 == 0) {
        return "MATH ERROR"
    }
    let quotient = 0;
    return quotient = num / num2;
}

function operate (num = 0, operator, num2 = 0) {
    if (operator.length === 0) {return num;}
    let answer = 0;
    if (operator === "+") {
        answer = add(num, num2);
        return answer;
    }else if (operator === "/") {
        answer = divide(num, num2);
        return answer;
    }else if (operator === "*") {
        answer = multiply(num, num2);
        return answer;
    }else if (operator === "-") {
        answer = subtract(num, num2);
        return answer;
    }else if (operator === "%") {
        answer = module(num, num2);
        return answer;
    }else if (operator === "^") {
        answer = power(num, num2);
        return answer;
    }
}