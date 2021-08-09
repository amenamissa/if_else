let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;





//  str 
// if ((isNaN(str)) || (str < 10) || (str > 99) || (parseInt(str) != str))
//   { alert("Введено неправильное число!"); }
// else
//   { var q = ChisloPropis(str);
//     alert('Пользователь ввёл: ' + str + " - " + q + ' ');
// //   }
  
//   function convertor(n, a, b) {
//     n = parseInt(n);
//     if (n < 20) {
//         return ((b && !n) ? '' : a[0][n]);
//     }
//     if (n >= 100) {
//         return (a[2][('' + n).substr(0, 1)] + ' '
//             + arguments.callee(('' + n).substr(1), a, true));
//     }
//     return (a[1][parseInt(n / 10)] + ' ' + ((n % 10)
//                                            ? a[0][n % 10]
//                                            : ''));
// }
// var arr = [
//     ["ноль", "один", "два", "три", "четыре", "пять", "шесть",
//         "семь", "восемь", "девять", "десять", "одиннадцать",
//         "двенадцать", "тринадцать", "четырнадцать", "пятнадцать",
//         "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"],

//     [,,"двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят",
//         "семьдесят", "восемьдесят", "девяносто"],

//     [,"сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот",
//         "семьсот", "восемьсот", "девятьсот"]
// ];


// function ChisloPropis(n)
// {
//     var b = n%10, a = (n-b)/10, // n = 10*a+b
//         A1 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
//         A2 = ['одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
//                'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
//         A3 = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
//               'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']; 		  
//     if (n > 10 && n < 20) return A2[n-11];              
//     if (b == 0) return A3[a-1];
//     return A3[a-1]+' '+A1[b-1];
   	
// }


const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;



document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    if(gameRun){
        window.location.reload(); 
    }
    else {
        window.location.reload();
    }
})


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
                `Что здесь за число?` 
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
            answerField.innerText = `это число?  ${answerNumber }?`;
        }
    }
})



document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        answerField.innerText = `круто,верно\n\u{1F60E}`
        answerField.innerText = `Угадал гы`
        gameRun = false;
    }
})


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = (phraseRandom === 0) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
                `Не знаю таких чисел!`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber + 0;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
            answerField.innerText = `Легче легкого ${answerNumber }?`;
            
        }
    }
});





