let inputWindow = document.getElementById('inputWindow');
//let displayContent = document.getElementById('inputWindow').textContent;
let firstOperand = null;
let secondOperand = null;
let operation = null;
let lastButtonClass = null;
inputWindow.textContent = 0;

function checkPressedButtons() {
    const buttons = document.querySelectorAll('button');
    const buttonsArr = Array.from(buttons);
    //let keyP = null;
    buttonsArr.forEach(elem => elem.addEventListener('click', (event) => {
           let keyId = event.target.id;
           let keyClass = event.target.className;
          // console.log(event);
           calcLogic(keyId, keyClass);
        }))
}

//output digits to the screen
function keyOutput(input)
{
    if ( input === 'btn_0' )
    {
        inputWindow.textContent += '0';
    } 
    else if ( input === 'btn_1' )
    {
        inputWindow.textContent += '1';
    } 
    else if ( input === 'btn_2' )
    {
        inputWindow.textContent += '2';
    } 
    else if ( input === 'btn_3' )
    {
        inputWindow.textContent += '3';
    } 
    else if ( input === 'btn_4' )
    {
        inputWindow.textContent += '4';
    } 
    else if ( input === 'btn_5' )
    {
        inputWindow.textContent += '5';
    } 
    else if ( input === 'btn_6' )
    {
        inputWindow.textContent += '6';
    } 
    else if ( input === 'btn_7' )
    {
        inputWindow.textContent += '7';
    }
    else if ( input === 'btn_8' )
    {
        inputWindow.textContent += '8';
    } 
    else if ( input === 'btn_9' )
    {
        inputWindow.textContent += '9';
    }
    else if ( input === 'btn_comma' )
    {
        inputWindow.textContent += '.';
    }
}

//Make binary operation on display content. Input should be pressed button of operation.
function unaryOperator(input) 
{
    if(input === 'btn_plusmn')
    {
        inputWindow.textContent = - Number(inputWindow.textContent);
    }
    else if(input === 'btn_sqrt')
    {
        inputWindow.textContent = Math.sqrt(Number(inputWindow.textContent));
    }
    else if(input === 'btn_square')
    {
        inputWindow.textContent = Number(inputWindow.textContent) ** 2;
    }
    else if(input === 'btn_reciprocal')
    {
        inputWindow.textContent = 1/ Number(inputWindow.textContent);
    }
    else if(input === 'btn_lg')
    {
        inputWindow.textContent = Math.log10(Number(inputWindow.textContent));
    }
    


}

//make operation between operand in veriable and display content. Input should be variable operation
function binaryOperator(input)
{
    if(input === 'sum')
    {
        inputWindow.textContent = firstOperand + Number(inputWindow.textContent);
        firstOperand = Number(inputWindow.textContent);
    }
    else if(input === 'sub')
    {
        inputWindow.textContent = firstOperand - Number(inputWindow.textContent);
        firstOperand = Number(inputWindow.textContent);
    }
    else if(input === 'mult')
    {
        inputWindow.textContent = firstOperand * Number(inputWindow.textContent);
        firstOperand = Number(inputWindow.textContent);
    }
    else if(input === 'div')
    {
        inputWindow.textContent = firstOperand / Number(inputWindow.textContent);
        firstOperand = Number(inputWindow.textContent);
    }
    
}

//Handle key input and write meaning of operation to variable operation
function operationDeclaration(input)
{
    if(input === 'btn_sum'){operation = 'sum';}
    if(input === 'btn_sub'){operation = 'sub';}
    if(input === 'btn_multiply'){operation = 'mult';}
    if(input === 'btn_division'){operation = 'div';}
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
                    if(lastButtonClass === 'nums')
                    {
                        unaryOperator(kId);
                    }
                    else
                    {
                        inputWindow.textContent = 'Error';
                    }
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
   
   // console.log(inputWindow.textContent);
   // console.log(lastButtonClass);

}
checkPressedButtons();