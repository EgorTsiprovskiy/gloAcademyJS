"use strict";
/*
let title; +
let screens = "Простые,Сложные,Интерактивные"; +
let screenPrice; +
let rollback = 50;
let fullPrice;
let adaptive;
let servicePercentPrices;
let service1;
let service2;
let allServicePrices;
*/

const appData = {
  title: "", 
  screens: "", 
  screenPrice: 0, 
  adaptive: true, 
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrices: 0,
  service1: "",
  service2: "",
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные"
    );

    do {
      appData.screenPrice = prompt("Сколько это будет стоить??");
    } while (!isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  getRollbackMessage: function () {
    if (appData.fullPrice > 30000) return "Даем скидку в 10%";
    else if (appData.fullPrice >= 15000 && appData.fullPrice <= 30000)
      return "Даем скидку в 5%";
    else if (appData.fullPrice < 15000 && appData.fullPrice >= 0)
      return "Скидка не предусмотрена";
    else return "Что то пошло не так";
  },
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0;
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги1 нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги2 нужен?");
      }

      do {
        appData.price = prompt("Сколько это будет стоить?");
      } while (!isNumber(appData.price));
      sum += +appData.price;
    }

    return sum;
  },
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    if (!appData.title) return appData.title;
    return appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase().trim();
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  logger: function () {
    for (let key in appData){
        console.log("Ключ: " + key);
    }
  },
  start: function () {
    appData.asking();
    appData.getTitle();
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getRollbackMessage();
    appData.getServicePercentPrices();
    appData.logger();
  }
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

appData.start();
