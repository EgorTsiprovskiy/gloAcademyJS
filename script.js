"use strict";

const title = "learnJS";
const screens = "Простые,Сложные,Интерактивные";
const screenPrice = 100;
const rollback = 50;
const fullPrice = 100000;
const adaptive = true;

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
screens = screens.toLowerCase().split(",");
console.log(screens);
console.log(fullPrice * (rollback / 100));

title = prompt("Как называется ваш проект?"); // Пункт 3
screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"); // Пункт 4
screenPrice = prompt("Сколько будет стоить данная работа?", 12000); // Пункт 5
adaptive = prompt("Нужен ли адаптив на сайте?", "true/false"); // Пункт 6

// Пункт 7
let service1 = prompt("Какой дополнительный тип услуги нужен?"); 
let servicePrice1 = prompt("Сколько это будет стоить?"); 

let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?");

// Пункт 8
fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Пункт 9
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log("servicePercentPrice = " + servicePercentPrice);

// Пункт 10
fullPrice = fullPrice > 30000 ? console.log("Даем скидку в 10%") :
            fullPrice >= 15000 && fullPrice <= 30000 ? console.log("Даем скидку в 5%") :
            fullPrice < 15000 && fullPrice >= 0 ? console.log("Скидка не предусмотрена") :
            fullPrice < 0 ? console.log("Что то пошло не так") :
            console.log("Не корректная цена");
