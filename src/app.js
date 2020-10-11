let firstNumber;
let secondNumber;
let hasOperatorBeenClicked = false;
let operator = function (x, y) {
    return x + y;
};

function calculate(x, y, operator) {
    return operator(x, y);
}

const one = document.getElementById('1');
one.onclick = function () {
    document.getElementById('output').innerText += '1';
    if (!hasOperatorBeenClicked) {
        firstNumber = parseInt(document.getElementById('output').innerText);
    } else {
        secondNumber = parseInt(document.getElementById('output').innerText);
    }
}

const two = document.getElementById('2');
two.onclick = function () {
    document.getElementById('output').innerText += '2';
    if (!hasOperatorBeenClicked) {
        firstNumber = parseInt(document.getElementById('output').innerText);
    } else {
        secondNumber = parseInt(document.getElementById('output').innerText);
    }
}

const three = document.getElementById('3');
three.onclick = function () {
    document.getElementById('output').innerText += '3';
    if (!hasOperatorBeenClicked) {
        firstNumber = parseInt(document.getElementById('output').innerText);
    } else {
        secondNumber = parseInt(document.getElementById('output').innerText);
    }
}

const four = document.getElementById('4');
four.onclick = function () {
    document.getElementById('output').innerText += '4';
    if (!hasOperatorBeenClicked) {
        firstNumber = parseInt(document.getElementById('output').innerText);
    } else {
        secondNumber = parseInt(document.getElementById('output').innerText);
    }
}

const five = document.getElementById('5');
five.onclick = function () {
    document.getElementById('output').innerText += '5';
    if (!hasOperatorBeenClicked) {
        firstNumber = parseInt(document.getElementById('output').innerText);
    } else {
        secondNumber = parseInt(document.getElementById('output').innerText);
    }
}

const six = document.getElementById('6');
six.onclick = function () {
    document.getElementById('output').innerText += '6';
    if (!hasOperatorBeenClicked) {
        firstNumber = parseInt(document.getElementById('output').innerText);
    } else {
        secondNumber = parseInt(document.getElementById('output').innerText);
    }
}

const seven = document.getElementById('7');
seven.onclick = function () {
    document.getElementById('output').innerText += '7';
    if (!hasOperatorBeenClicked) {
        firstNumber = parseInt(document.getElementById('output').innerText);
    } else {
        secondNumber = parseInt(document.getElementById('output').innerText);
    }
}

const eight = document.getElementById('8');
eight.onclick = function () {
    document.getElementById('output').innerText += '8';
    if (!hasOperatorBeenClicked) {
        firstNumber = parseInt(document.getElementById('output').innerText);
    } else {
        secondNumber = parseInt(document.getElementById('output').innerText);
    }
}

const nine = document.getElementById('9');
nine.onclick = function () {
    document.getElementById('output').innerText += '9';
    if (!hasOperatorBeenClicked) {
        firstNumber = parseInt(document.getElementById('output').innerText);
    } else {
        secondNumber = parseInt(document.getElementById('output').innerText);
    }
}

const zero = document.getElementById('0');
zero.onclick = function () {
    document.getElementById('output').innerText += '0';
    if (!hasOperatorBeenClicked) {
        firstNumber = parseInt(document.getElementById('output').innerText);
    } else {
        secondNumber = parseInt(document.getElementById('output').innerText);
    }
}

const add = document.getElementById('+');
add.onclick = function () {
    operator = function (x, y) {
        return x + y;
    }

    document.getElementById('output').innerText = '';
    hasOperatorBeenClicked = true;
}

const divide = document.getElementById('/');
divide.onclick = function () {
    operator = function (x, y) {
        if (y === 0){
            return 'that\'s illegal';
        } else {
            return x / y;
        }
    }

    document.getElementById('output').innerText = '';
    hasOperatorBeenClicked = true;
}

const subtract = document.getElementById('-');
subtract.onclick = function () {
    operator = function (x, y) {
        return x - y;
    }

    document.getElementById('output').innerText = '';
    hasOperatorBeenClicked = true;
}

const multiply = document.getElementById('*');
multiply.onclick = function () {
    operator = function (x, y) {
        return x * y;
    }

    document.getElementById('output').innerText = '';
    hasOperatorBeenClicked = true;
}

const equals = document.getElementById('=');
equals.onclick = function () {
    document.getElementById('output').innerText = calculate(firstNumber, secondNumber, operator);
}

const clear = document.getElementById('clear');
clear.onclick = function (){
    document.getElementById('output').innerText = '';
    firstNumber = null;
    secondNumber = null;
    hasOperatorBeenClicked = false;
    operator = null;
}
