let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
});

document.addEventListener('keydown', function (event) {
    lastOperand = 0;
    operation = null;
    console.log(event.key)
    if (event.key === 'Escape' || event.key === 'Delete'){
    inputWindow.value = '';
    }
});

//number input( first rule is for mouse input, the second is for keyboard input)

document.getElementById('btn_1').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value += '1';
});

document.addEventListener('keypress', function (event) {
    lastOperand = 0;
    operation = null;
    if (event.key === '1'){
    inputWindow.value += '1';
    }
});

document.getElementById('btn_2').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value += '2';
});

document.addEventListener('keypress', function (event) {
    lastOperand = 0;
    operation = null;
    if (event.key === '2'){
    inputWindow.value += '2';
    }
});

document.getElementById('btn_3').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value += '3';
});

document.addEventListener('keypress', function (event) {
    lastOperand = 0;
    operation = null;
    if (event.key === '3'){
    inputWindow.value += '3';
    }
});

document.getElementById('btn_4').addEventListener('click', function () {
lastOperand = 0;
    operation = null;
    inputWindow.value += '4';
});

document.addEventListener('keypress', function (event) {
    lastOperand = 0;
    operation = null;
    if (event.key === '4'){
    inputWindow.value += '4';
    }
});

document.getElementById('btn_5').addEventListener('click', function () {
lastOperand = 0;
    operation = null;
    inputWindow.value += '5';
});

document.addEventListener('keypress', function (event) {
    lastOperand = 0;
    operation = null;
    if (event.key === '5'){
    inputWindow.value += '5';
    }
});

document.getElementById('btn_6').addEventListener('click', function () {
lastOperand = 0;
    operation = null;
    inputWindow.value += '6';
});

document.addEventListener('keypress', function (event) {
    lastOperand = 0;
    operation = null;
    if (event.key === '6'){
    inputWindow.value += '6';
    }
});

document.getElementById('btn_7').addEventListener('click', function () {
lastOperand = 0;
    operation = null;
    inputWindow.value += '7';
});

document.addEventListener('keypress', function (event) {
    lastOperand = 0;
    operation = null;
    if (event.key === '7'){
    inputWindow.value += '7';
    }
});

document.getElementById('btn_8').addEventListener('click', function () {
lastOperand = 0;
    operation = null;
    inputWindow.value += '8';
});

document.addEventListener('keypress', function (event) {
    lastOperand = 0;
    operation = null;
    if (event.key === '8'){
    inputWindow.value += '8';
    }
});

document.getElementById('btn_9').addEventListener('click', function () {
lastOperand = 0;
    operation = null;
    inputWindow.value += '9';
});

document.addEventListener('keypress', function (event) {
    lastOperand = 0;
    operation = null;
    if (event.key === '9'){
    inputWindow.value += '9';
    }
});

document.getElementById('btn_0').addEventListener('click', function () {
lastOperand = 0;
    operation = null;
    inputWindow.value += '0';
});

document.addEventListener('keypress', function (event) {
    lastOperand = 0;
    operation = null;
    if (event.key === '0'){
    inputWindow.value += '0';
    }
});