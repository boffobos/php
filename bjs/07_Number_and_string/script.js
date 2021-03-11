let secondOperand = 0;
let firstOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    secondOperand = 0;
    firstOperand = 0
    operation = null;
    inputWindow.textContent = '';
});

document.addEventListener('keydown', function (event) {
    console.log(event.key)
    if (event.key === 'Escape' || event.key === 'Delete'){
    inputWindow.textContent = '';
    secondOperand = 0;
    firstOperand = 0;
    operation = null;
    }
});

function numInput(button){}

document.getElementById('btn_1').addEventListener('click', function () {
   inputWindow.textContent += '1';
   
});
document.addEventListener('keypress', function (event) {
    if (event.key === '1'){
    inputWindow.textContent += '1';
    }
});

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
    inputWindow.textContent += '2';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '2'){
    inputWindow.textContent += '2'; 
    }
});

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.textContent += '3';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '3'){
    inputWindow.textContent += '3'
    }
});

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.textContent += '4';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '4'){
    inputWindow.textContent += '4';
    }
});

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.textContent += '5';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '5'){
    inputWindow.textContent += '5';
    }
});

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.textContent += '6';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '6'){
    inputWindow.textContent += '6';
    }
});

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.textContent += '7';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '7'){
    inputWindow.textContent += '7';
    }
});

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.textContent += '8';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '8'){
    inputWindow.textContent += '8';
    }
});

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.textContent += '9';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '9'){
    inputWindow.textContent += '9';
    }
});

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.textContent += '0';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '0'){
    inputWindow.textContent += '0';
    }
});

//operation input

//sum
document.getElementById('btn_sum').addEventListener('click', function () {
        firstOperand = parseInt(inputWindow.textContent);
        inputWindow.textContent = '';
        operation = 'sum';

});
document.addEventListener('keypress', function (event) {
    if (event.key === '+'){
        firstOperand = parseInt(inputWindow.textContent);
        inputWindow.textContent = '';
        operation = 'sum';
    }
});

//subtraction
document.getElementById('btn_sub').addEventListener('click', function () {
        firstOperand = parseInt(inputWindow.textContent);
        inputWindow.textContent = '';
        operation = 'sub';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '-'){
        firstOperand = parseInt(inputWindow.textContent);
        inputWindow.textContent = '';
        operation = 'sub';
    }
});

//multiply
document.getElementById('btn_multiply').addEventListener('click', function () {
        firstOperand = parseInt(inputWindow.textContent);
        inputWindow.textContent = '';
        operation = 'multiply';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '*'){
        firstOperand = parseInt(inputWindow.textContent);
        inputWindow.textContent = '';
        operation = 'multiply';
    }
});

//division
document.getElementById('btn_division').addEventListener('click', function () {
        firstOperand = parseInt(inputWindow.textContent);
        inputWindow.textContent = '';
        operation = 'division';
});
document.addEventListener('keypress', function (event) {
    if (event.key === '/'){
        firstOperand = parseInt(inputWindow.textContent);
        inputWindow.textContent = '';
        operation = 'division';
    }
});

//Operation process

document.getElementById('btn_result').addEventListener('click', function () {
    if(operation === 'sum'){
        // inputWindow.value = Number(lastOperand) + Number(inputWindow.value);
        inputWindow.textContent = firstOperand + parseInt(inputWindow.textContent);
    }
    else if(operation === 'sub'){
        inputWindow.textContent = firstOperand - Number(inputWindow.textContent);    
    }
    else if(operation === 'multiply'){
        inputWindow.textContent = firstOperand * Number(inputWindow.textContent);
    }
    else if(operation === 'division'){
        inputWindow.textContent = firstOperand / Number(inputWindow.textContent);
    }
    });
    

/*document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter'){
        if(operation === 'sum'){
            // inputWindow.value = Number(lastOperand) + Number(inputWindow.value);
            inputWindow.textContent = Number(lastOperand) + Number(inputWindow.textContent);
        }
        else if(operation === 'sub'){
            inputWindow.textContent = Number(lastOperand) - Number(inputWindow.textContent);    
        }
        else if(operation === 'multiply'){
            inputWindow.textContent = Number(lastOperand) * Number(inputWindow.textContent);
        }
        else if(operation === 'division'){
            inputWindow.textContent = Number(lastOperand) / Number(inputWindow.textContent);
        }
    //inputWindow.value = Number(lastOperand) + Number(inputWindow.value);
    }
});*/








