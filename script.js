'use strict';

let title;
const screens = "Простые,Сложные,Интерактивные";
let screenPrice;
const rollback = 50;
let fullPrice;
const adaptive = true;
let servicePercentPrices;
let service1;
let service2;

let allServicePrices;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

    do {
        screenPrice= prompt("Сколько это будет стоить??");
    } while (!isNumber(screenPrice)) {
        screenPrice= prompt("Сколько это будет стоить??");
    }
}

const getRollbackMessage = function () {
    if (fullPrice > 30000) return "Даем скидку в 10%"
    else if (fullPrice >= 15000 && fullPrice <= 30000) return "Даем скидку в 5%"
    else if (fullPrice < 15000 && fullPrice >= 0) return "Скидка не предусмотрена"
    else  return "Что то пошло не так"
}
//Урок 4 пункт 1
let getAllServicePrices = function () {

    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0){
            service1 = prompt("Какой дополнительный тип услуги1 нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги2 нужен?")
        }

        sum += +prompt("Сколько это будет стоить?");
    }

    return sum;
}
//Урок 4 пункт 2
function getFullPrice() {
    return fullPrice +  allServicePrices;
}
//Урок 4 пункт 3
let getTitle = function() {
    if (!title) return title
    return title[0].toUpperCase() + title.slice(1).toLowerCase().trim();
}
//Урок 4 пункт 4
function getServicePercentPrices() {
    return fullPrice - rollback
}

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrices = getAllServicePrices();

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());