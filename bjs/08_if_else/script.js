let minValue;// = parseInt(prompt('Минимальное знание числа для игры')) || 0;
let maxValue;// = parseInt(prompt('Максимальное знание числа для игры')) || 100;
const popup = document.querySelector('#minmax');
const startButton = document.querySelector('.start');
const setInterval = document.querySelector('#set_interval');
const messageConfirmation = document.querySelector('#message');
const alertWindow = document.querySelector('#alert')
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

let answerNumber;
let orderNumber;
let gameRun;



startButton.addEventListener('click', () => {
    popup.showModal();
    startButton.style.display =  'none';
})

function textolization (number) {
    let text = '';
    let ones = 0;
    let tens = 0;
    let hundreds = 0;
    let sign = '';
    let onesText = '';
    let tensText = '';
    let hundredsText = '';

    function onesToText(ones) {
        onesText = '';
        ones = Math.abs(ones);
        if (ones === 1) {
            onesText = 'один';
        } else if (ones === 2) {
            onesText = 'два';
        } else if (ones === 3) {
            onesText = 'три';
        } else if (ones === 4) {
            onesText = 'четыре';
        } else if (ones === 5) {
            onesText = 'пять';
        } else if (ones === 6) {
            onesText = 'шесть';
        } else if (ones === 7) {
            onesText = 'семь';
        } else if (ones === 8) {
            onesText = 'восемь';
        } else if (ones === 9) {
            onesText = 'девять';
        } else if (ones === 10) {
            onesText = 'десять';
        } else if (ones === 11) {
            onesText = 'одиннадцать';
        } else if (ones === 12) {
            onesText = 'двенадцать';
        } else if (ones === 13) {
            onesText = 'тринадцать';
        } else if (ones === 14) {
            onesText = 'четырнадцать';
        } else if (ones === 15) {
            onesText = 'пятнадцать';
        } else if (ones === 16) {
            onesText = 'шестнадцать';
        } else if (ones === 17) {
            onesText = 'семнадцать';
        } else if (ones === 18) {
            onesText = 'восемнадцать';
        } else if (ones === 19) {
            onesText = 'девятнадцать';
        } else if (ones === 20) {
            onesText = 'двадцать';
        } else if (ones === 0 && answerNumber === 0) {
            onesText = '0';
        }
    }
    function tensToText(tens) {
        tensText = '';
        tens = Math.abs(tens);
        if (tens === 2) {
            tensText = 'двадцать';
        } else if (tens === 3) {
            tensText = 'тридцать';
        } else if (tens === 4) {
            tensText = 'сорок';
        } else if (tens === 5) {
            tensText = 'пятьдесят';
        } else if (tens === 6) {
            tensText = 'шестьдесят';
        } else if (tens === 7) {
            tensText = 'семьдесят';
        } else if (tens === 8) {
            tensText = 'восемьдесят';
        } else if (tens === 9) {
            tensText = 'девяносто';
        }
        return tensText;
    }
    function hundredsToText(hudreds) {
        hundredsText = '';
        hundreds = Math.abs(hundreds);
        if (hundreds === 1) {
            hundredsText = 'сто';
        } else if (hundreds === 2) {
            hundredsText = 'двести';
        } else if (hundreds === 3) {
            hundredsText = 'триста';
        } else if (hundreds === 4) {
            hundredsText = 'четыреста';
        } else if (hundreds === 5) {
            hundredsText = 'пятьсот';
        } else if (hundreds === 6) {
            hundredsText = 'шестьсот';
        } else if (hundreds === 7) {
            hundredsText = 'семьсот';
        } else if (hundreds === 8) {
            hundredsText = 'восемьсот';
        } else if (hundreds === 9) {
            hundredsText = 'девятьсот';
        }
    }

    if (number < 0) sign = 'минус';
   
    if (Math.abs(number) <= 20) {
        onesToText(number);
    } else {
        if (Math.abs(number % 100) <= 20) {
            ones = Math.abs(number % 100);
            hundreds = Math.abs( (number - number % 100) / 100 );
            onesToText(ones);
            hundredsToText(hundreds);
        } else {
        ones = Math.abs(number % 100 % 10);
        tens = Math.abs( (number - number % 100 % 10) % 100 / 10 );
        hundreds = Math.abs( (number - number % 100) / 100 );
        onesToText(ones);
        tensToText(tens);
        hundredsToText(hundreds);
        }
    }


    text = `${sign} ${hundredsText} ${tensText} ${onesText}`;
    if (text.length > 20) {
        text = number;
    }
    return text;
}   

setInterval.addEventListener('click', (event) => {
    event.preventDefault();
    minValue = parseInt(document.querySelector('#min').value) || 0;
    maxValue = parseInt(document.querySelector('#max').value) || 100;

    if(minValue > maxValue) {
        [minValue, maxValue] = [maxValue, minValue]
    }
    (minValue < -999 ) ? minValue = -999 : minValue = minValue;
    (minValue > 999 ) ? minValue = 997 : minValue = minValue;
    (maxValue > 999) ? maxValue = 999 : maxValue = maxValue;
    (maxValue < -999) ? maxValue = -997 : maxValue = maxValue;
    messageConfirmation.textContent = `А теперь загадайте любое целое число от ${minValue} до ${maxValue}, а я угадаю его с трех нот!`
    //alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
            
    popup.close();
    alertWindow.showModal();
    
})

document.querySelector('#confirm').addEventListener('click', () => {
    document.querySelector('.container').style.display = 'block';
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${textolization (answerNumber)}?`;

    alertWindow.close();

})

document.getElementById('btnRetry').addEventListener('click',  (event) => {
    
    document.querySelector('#min').value = '';
    document.querySelector('#max').value = '';
    popup.showModal();
    
    
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F494}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            switch(Math.round( Math.random()*5)) {
             case 1: answerField.innerText = `Может быть это ${textolization (answerNumber)}?`;
                break;
             case 2: answerField.innerText = `Хмм... Это ${textolization (answerNumber)}?`;
                break;
             case 3: answerField.innerText = `Ну, может это число ${textolization (answerNumber)}?`;
                break;      
             case 4: answerField.innerText = `Готов сделать ставку, что это ${textolization (answerNumber)}!`;
                break;      
             case 5: answerField.innerText = `А вот это ${textolization (answerNumber)}?`;
                break; 
                default: answerField.innerText = `Вы загадали ${textolization (answerNumber)}?`;   
            }
           // answerField.innerText = askPhrase;
        }
    }
})
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            switch ( Math.round( Math.random()*5) )
            {case 1: answerField.innerText = `Может быть это ${textolization (answerNumber)}?`;
                break;
             case 2: answerField.innerText = `Наверняка это ${textolization (answerNumber)}?`;
                break;
             case 3: answerField.innerText = `Ну это точно ${textolization (answerNumber)}!`;
                break;      
             case 4: answerField.innerText = `Готов сделать ставку, что это ${textolization (answerNumber)}!`;
                break;
             case 5: answerField.innerText = `Последняя попытка... Это ${textolization (answerNumber)}?`;
                break;      
                default: answerField.innerText = `Вы загадали ${textolization (answerNumber)}?`;
            }
            
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        switch( Math.round( Math.random()*3) ) {
            case 1: answerField.innerText = `Eeeeee!\n\u{1F525}`;
                break;
            case 2: answerField.innerText = `Ура!!! \n\u{1F389}`;
                break;
            case 3: answerField.innerText = `Я угадал! Я угадал! \n\u{2757}`;
                break;
            default: answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
            }
        
        gameRun = false;
    }
})

