'use strict';

const title = "learnJS";
const screens = "Простые,Сложные,Интерактивные";
const screenPrice = 100;
const rollback = 50;
const fullPrice = 100000;
const adaptive = true;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function () {
    if (fullPrice > 30000) return "Даем скидку в 10%"
    else if (fullPrice >= 15000 && fullPrice <= 30000) return "Даем скидку в 5%"
    else if (fullPrice < 15000 && fullPrice >= 0) return "Скидка не предусмотрена"
    else  return "Что то пошло не так"
}
//Урок 4 пункт 1
let getAllServicePrices = function (servicePrice1,servicePrice2) {
    let allServicePrices = servicePrice1 + servicePrice2;
    return allServicePrices;
};
//Урок 4 пункт 2
function getFullPrice(fullPrice, allServicePrices) {
    return fullPrice + allServicePrices;
}
//Урок 4 пункт 3
let getTitle = function(title) {
    if (!title) return title
    return title[0].toUpperCase() + title.slice(1).toLowerCase().trim();
}
//Урок 4 пункт 4
function getServicePercentPrices(fullPrice, rollback) {
    let servicePercentPrice = fullPrice - rollback;
    return servicePercentPrice; 
}

let service1 = prompt("Какой дополнительный тип услуги нужен?"); 
let servicePrice1 = prompt("Сколько это будет стоить?"); 

let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?");

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);

console.log(getRollbackMessage(fullPrice));

//Урок 4 пункт 1
console.log(getAllServicePrices(servicePrice1,servicePrice2));
//Урок 4 пункт 2
console.log(getFullPrice(fullPrice, getAllServicePrices(servicePrice1,servicePrice2)));
//Урок 4 пункт 3
console.log(getTitle(title));
//Урок 4 пункт 4
console.log(getServicePercentPrices(fullPrice, rollback) );