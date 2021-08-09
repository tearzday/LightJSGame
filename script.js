let btnUp = document.querySelector('.box__up');
let btnDown = document.querySelector('.box__down');
let btnLeft = document.querySelector('.box__left');
let btnRight = document.querySelector('.box__right');


let krug = document.querySelector('.box__user')


let stepOne = 130;//Переменная для вертикальной оси
let stepTwo = -100;//Переменная для горизонтальной оси

btnUp.onclick = function () {  //Функция работающая при клике и отвчающая за изменение позиции
    stepOne -= 10;//Переменная , играющая координатную роль с увеличением при каждом клике
    let stepResult = stepOne + "px";// Добавляет переменной px и переводит его в string
    krug.style.top = stepResult;
}

btnDown.onclick = function () {
    stepOne += 10;
    let stepResult = stepOne + "px";
    krug.style.top = stepResult;
}

btnLeft.onclick = function () {
    stepTwo -= 10;
    let stepResult = stepTwo + "px";
    krug.style.left = stepResult;
}

btnRight.onclick = function () {
    stepTwo += 10;
    let stepResult = stepTwo + "px";
    krug.style.left = stepResult;
}

