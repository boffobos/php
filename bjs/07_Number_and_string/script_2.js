let inputWindow = document.getElementById('inputWindow');
let flowOutputWindow = document.getElementById('flowOut');
let firstOperand = null;
let secondOperand = null;
let operation = null;
let lastButtonClass = null;
let lastButtonId = null;
inputWindow.textContent = 0;

function checkPressedButtons() {
    const buttons = document.querySelectorAll('button');
    const buttonsArr = Array.from(buttons);
    buttonsArr.forEach(elem => elem.addEventListener('click', (event) => {
           let keyId = event.target.id;
           let keyClass = event.target.className;
           calcLogic(keyId, keyClass);
           //flowOutput(keyId, keyClass);
        }));
    document.addEventListener('keydown', (event) =>{
        let keyboardKey = event.key;
        if(keyboardKey === 'Enter'){
            event.preventDefault();
        }
        keyBoardHandler(keyboardKey);
    })    

}

//output digits to the screen
function keyOutput(kId)
{
    if ( kId === 'btn_0' )
    {
        inputWindow.textContent += '0';
    } 
    else if ( kId === 'btn_1' )
    {
        inputWindow.textContent += '1';
    } 
    else if ( kId === 'btn_2' )
    {
        inputWindow.textContent += '2';
    } 
    else if ( kId === 'btn_3' )
    {
        inputWindow.textContent += '3';
    } 
    else if ( kId === 'btn_4' )
    {
        inputWindow.textContent += '4';
    } 
    else if ( kId === 'btn_5' )
    {
        inputWindow.textContent += '5';
    } 
    else if ( kId === 'btn_6' )
    {
        inputWindow.textContent += '6';
    } 
    else if ( kId === 'btn_7' )
    {
        inputWindow.textContent += '7';
    }
    else if ( kId === 'btn_8' )
    {
        inputWindow.textContent += '8';
    } 
    else if ( kId === 'btn_9' )
    {
        inputWindow.textContent += '9';
    }
    else if ( kId === 'btn_comma' )
    {
        inputWindow.textContent += '.';
    }
}

//Make binary operation on display content. Input should be pressed button of operation.
function unaryOperator(kId) 
{
    if(kId === 'btn_plusmn')
    {
        inputWindow.textContent = - Number(inputWindow.textContent);
    }
    else if(kId === 'btn_sqrt')
    {
        inputWindow.textContent = Math.sqrt(Number(inputWindow.textContent));
    }
    else if(kId === 'btn_square')
    {
        inputWindow.textContent = Number(inputWindow.textContent) ** 2;
    }
    else if(kId === 'btn_reciprocal')
    {
        inputWindow.textContent = 1 / Number(inputWindow.textContent);
    }
    else if(kId === 'btn_lg')
    {
        inputWindow.textContent = Math.log10(Number(inputWindow.textContent));
    }
    


}

//make operation between operand in veriable and display content. Input should be variable operation
function binaryOperator(kId)
{
    if(kId === 'sum')
    {
        inputWindow.textContent = firstOperand + Number(inputWindow.textContent);
        firstOperand = Number(inputWindow.textContent);
    }
    else if(kId === 'sub')
    {
        inputWindow.textContent = firstOperand - Number(inputWindow.textContent);
        firstOperand = Number(inputWindow.textContent);
    }
    else if(kId === 'mult')
    {
        inputWindow.textContent = firstOperand * Number(inputWindow.textContent);
        firstOperand = Number(inputWindow.textContent);
    }
    else if(kId === 'div')
    {
        inputWindow.textContent = firstOperand / Number(inputWindow.textContent);
        firstOperand = Number(inputWindow.textContent);
    }
    
}

//Handle key input and write meaning of operation to variable operation
function operationDeclaration(kId)
{   let oper;
    if(kId === 'btn_sum'){operation = 'sum'; oper = '+';}
    if(kId === 'btn_sub'){operation = 'sub'; oper = '-';}
    if(kId === 'btn_multiply'){operation = 'mult'; oper = '*';}
    if(kId === 'btn_division'){operation = 'div'; oper = '/';}
    return oper;
}

function calcLogic(kId, kClass)
{
    if(kId === 'btn_clr')
    {
        firstOperand = null;
        operation = null;
        lastButtonClass = null;
        inputWindow.textContent = 0;
    }
    if(kId === 'btn_ce')
    {
        inputWindow.textContent = 0;
    }

    flowOutput(kId, kClass, lastButtonClass);
        
    if(firstOperand !== null)
    {
        if(kClass.includes('nums'))
        {
            if(lastButtonClass === 'nums')
            {
                keyOutput(kId);
            }
            else if(lastButtonClass === 'binary' || lastButtonClass === 'unary' || lastButtonClass === 'service')
            {
                inputWindow.textContent = '';
                keyOutput(kId);
            }
            // here can be else for some use if add new key classes over nums binary unary
        }
        else if(kClass.includes('binary') || kClass.includes('unary') )
        {
            if(kClass.includes('unary'))
            {
                if(typeof Number(inputWindow.textContent) === 'number')
                {
                    if(lastButtonClass === 'nums' || lastButtonId === 'btn_result' || lastButtonClass === 'unary')
                    {
                        unaryOperator(kId);
                    }
                    // else if()
                }
                else
                {
                    inputWindow.textContent = 'Error';
                }
            }
            else
            {
                if(lastButtonClass === 'nums')
                {
                    binaryOperator(operation);
                    operationDeclaration(kId);
                }
                else if(lastButtonClass === 'binary' || lastButtonClass === 'unary')
                {
                    if(lastButtonClass === 'unary')
                    {
                        binaryOperator(operation);
                        operationDeclaration(kId);
                    }
                    else
                    {
                        operationDeclaration(kId);
                    }
                }
            }
        }
    }
    else  //when fist operand = null
    {
        if(inputWindow.textContent === '0')
        {
            if(kClass.includes('nums'))
            {
                inputWindow.textContent = '';
                keyOutput(kId);
            }
        }
        else if(kClass.includes('nums'))
        {       
            if(lastButtonClass === 'unary')
            {   
                inputWindow.textContent = '';
                keyOutput(kId);
            }
            else
            {
                keyOutput(kId); 
            }
                
        }
        else if(kClass.includes('unary') || kClass.includes('binary'))
        {
            if(kClass.includes('unary'))
            {
                unaryOperator(kId)
            }
            else
            {
                firstOperand = Number(inputWindow.textContent);
                operationDeclaration(kId);
            }
        }
        else
        {
            //for future use
        }
    }
   
   
    if (kClass.includes('nums'))
    {
        lastButtonClass = 'nums';
    }
    else if (kClass.includes('unary'))
    {
        lastButtonClass = 'unary';
    }
    else if (kClass.includes('binary'))
    {
        lastButtonClass = 'binary';
    }
    else if (kClass.includes('service'))
    {
        lastButtonClass = 'service';
    }
    lastButtonId = kId;
   
}

//print out previous input and operatin to separeate window
function flowOutput(kId, kClass, lastButtonClass)
{
    let oper = operationDeclaration(kId);
    if (kId === 'btn_result')
    {
        flowOutputWindow.textContent = '';
    }
    else if (kClass.includes('binary') && lastButtonClass !== 'unary')
    {
        flowOutputWindow.textContent += `${inputWindow.textContent} ${oper} `;
    }
    else if (kClass.includes('binary'))
    {
        flowOutputWindow.textContent += ` ${oper} `;
    }
    else if (kClass.includes('unary'))
    {
        if(kId === 'btn_sqrt')
        {
            flowOutputWindow.textContent += `sqrt(${inputWindow.textContent}) `;
        }
        else if(kId === 'btn_square')
        {
            flowOutputWindow.textContent += `${inputWindow.textContent}**2 `;
        }
        else if(kId === 'btn_reciprocal')
        {
            flowOutputWindow.textContent += `1/${inputWindow.textContent} `;
        }
        else if(kId === 'btn_lg')
        {
            flowOutputWindow.textContent += `lg(${inputWindow.textContent}) `;
        }
    }
    else if (kId === "btn_clr")
    {
        flowOutputWindow.textContent = '';
    }
    

}

//handle keyboard input in addition to mouse input from page
function keyBoardHandler(keyboardKey)
{
        // operation keys 
        if(keyboardKey === '+')
        {
            keyId = 'btn_sum';
            keyClass = 'binary';
        }
        else if(keyboardKey === '-')
        {
            keyId = 'btn_sub';
            keyClass = 'binary';
        }
        else if(keyboardKey === '*')
        {
            keyId = 'btn_multiply';
            keyClass = 'binary';
        }
        else if(keyboardKey === '/')
        {
            keyId = 'btn_division';
            keyClass = 'binary';
        }
        else if(keyboardKey === 'Enter')
        {
            keyId = 'btn_result';
            keyClass = 'binary';
        }
        //number keys
        else if(keyboardKey === '0')
        {
            keyId = 'btn_0';
            keyClass = 'nums';
        }
        else if(keyboardKey === '1')
        {
            keyId = 'btn_1';
            keyClass = 'nums';
        }
        else if(keyboardKey === '2')
        {
            keyId = 'btn_2';
            keyClass = 'nums';
        }
        else if(keyboardKey === '3')
        {
            keyId = 'btn_3';
            keyClass = 'nums';
        }
        else if(keyboardKey === '4')
        {
            keyId = 'btn_4';
            keyClass = 'nums';
        }
        else if(keyboardKey === '5')
        {
            keyId = 'btn_5';
            keyClass = 'nums';
        }
        else if(keyboardKey === '6')
        {
            keyId = 'btn_6';
            keyClass = 'nums';
        }
        else if(keyboardKey === '7')
        {
            keyId = 'btn_7';
            keyClass = 'nums';
        }
        else if(keyboardKey === '8')
        {
            keyId = 'btn_8';
            keyClass = 'nums';
        }
        else if(keyboardKey === '9')
        {
            keyId = 'btn_9';
            keyClass = 'nums';
        }
        else if(keyboardKey === '.')
        {
            keyId = 'btn_comma';
            keyClass = 'nums';
        }
        //service keys
        else if(keyboardKey === 'Escape')
        {
            keyId = 'btn_clr';
            keyClass = '';
        }
        else if(keyboardKey === 'Delete')
        {
            keyId = 'btn_clr';
            keyClass = 'service';
        }
        else if(keyboardKey === 'Enter')
        {   
            keyId = 'btn_result';
            keyClass = 'binary';
        }
        calcLogic(keyId, keyClass);
}



checkPressedButtons();