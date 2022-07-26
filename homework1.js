
/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/

const city = 'Dnipro';
console.log(city);

const country = 'Ukraine';
console.log(country);

let number = 968502;
console.log(number);

let footballСlub = true;
console.log(footballСlub);

/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/

const height = 40;
const width = 70;

let result = height * width;
console.log(result);

/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;
*/

let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;

let distance1 = time * speedOfFirst; // расстояние, которое проехал первый автомобиль за два часа.
let distance2 = time * speedOfSecond; // расстояние, которое проехал второй автомобиль за два часа.
let fulldistanse = distance1 + distance2 // расстояние между городами.
console.log(fulldistanse);

/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log('randomNumber меньше 20');
} else if (randomNumber > 50) {
    console.log('randomNumber больше 50');
} else {
    console.log('randomNumber больше 20, и меньше 50');
}

/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

switch(true) {
    case (randomNumber < 20) : 
        console.log('randomNumber меньше 20');
    break;
    case (randomNumber > 50) :
        console.log('randomNumber больше 50');
    break;
    default :
    console.log('randomNumber больше 20, и меньше 50');
}

