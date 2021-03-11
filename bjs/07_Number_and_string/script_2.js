const inputWindow = document.getElementById('inputWindow');
let firstOperand = null;
let secondOperand = null;
let operation = null;


function checkPressedButtons() {
    const buttons = document.querySelectorAll('button');
    const buttonsArr = Array.from(buttons);
    let keyP = null;
    buttonsArr.forEach(elem => elem.addEventListener('click', (event) => {
           let keyP = event.target.id;
           console.log(event);
           keyHandler(keyP);
        }))
}

function keyHandler(input){
        console.log(input);
        console.log(parseInt(inputWindow.textContent));
    

    if ( input === 'btn_0' ){
        inputWindow.textContent += '0';
    } else if ( input === 'btn_1' ){
        inputWindow.textContent += '1';
    } else if ( input === 'btn_2' ){
        inputWindow.textContent += '2';
    } else if ( input === 'btn_3' ){
        inputWindow.textContent += '3';
    } else if ( input === 'btn_4' ){
        inputWindow.textContent += '4';
    } else if ( input === 'btn_5' ){
        inputWindow.textContent += '5';
    } else if ( input === 'btn_6' ){
        inputWindow.textContent += '6';
    } else if ( input === 'btn_7' ){
        inputWindow.textContent += '7';
    } else if ( input === 'btn_8' ){
        inputWindow.textContent += '8';
    } else if ( input === 'btn_9' ){
        inputWindow.textContent += '9';
    } else if ( input === 'btn_clr' ){
        inputWindow.textContent = '';
        firstOperand = null;
        secondOperand = null;
        operation = null;
    } else if ( input === 'btn_sum' ){
        if (firstOperand === null){
        firstOperand = parseInt(inputWindow.textContent);
        operation = 'sum';
        inputWindow.textContent = '';
        }
        else if (firstOperand !== null && secondOperand === null){
            secondOperand = parseInt(inputWindow.textContent);
            inputWindow.textContent = '';
            firstOperand = firstOperand + secondOperand;
            secondOperand = null;
            operation = 'sum';
            inputWindow.textContent = firstOperand;}
        else if (firstOperand !== null && secondOperand !== null){
           // inputWindow.textContent = '';
            firstOperand = firstOperand + secondOperand;
            inputWindow.textContent = firstOperand; }    
        }
      else if ( input === 'btn_sub' ){
        firstOperand = parseInt(inputWindow.textContent);
        operation = 'sub';
    } else if ( input === 'btn_multiply' ){
        firstOperand = parseInt(inputWindow.textContent);
        operation = 'mult';
    } else if ( input === 'btn_division' ){
        firstOperand = parseInt(inputWindow.textContent);
        operation = 'div';
    } else if ( input === 'btn_sqrt' ){
        let p = parseInt(inputWindow.textContent);
        inputWindow.textContent = Math.sqrt(p) ;
    }

    let lastButton = input;
    if (firstOperand == inputWindow.textContent && lastButton === 'btn_sum' || lastButton === 'btn_sub' || lastButton === 'btn_multiply' || lastButton === 'btn_division'){
        inputWindow.textContent = '';
    }
    
}

checkPressedButtons();