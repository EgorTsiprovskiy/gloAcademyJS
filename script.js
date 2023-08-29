"use strict";

const appData = {
  title: "", 
  screens: [], 
  screenPrice: 0, 
  adaptive: true, 
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrices: 0,
  services: {},
  asking: function () {
    
    
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    while (appData.isString(appData.title)) {
        appData.title = prompt("Как называется ваш проект?", "Введите текстовое название!");
    }
    /*
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные"
    );

    do {
      appData.screenPrice = prompt("Сколько это будет стоить??");
    } while (!appData.isNumber(appData.screenPrice));
*/
    for (let i = 0; i < 2; i++) {
        let name = prompt("Какие типы экранов нужно разработать?");
        while (appData.isString(name)) {
            name = prompt("Какие типы экранов нужно разработать?", "Введите текстовое название!");
        }
        let price = 0;

        do {
            price = prompt("Сколько это будет стоить??");
          } while (!appData.isNumber(price));

        appData.screens.push({id: i, name: name, price: price});
    }

    for (let i = 0; i < 2; i++) {
        let name = prompt("Какой дополнительный тип услуги нужен?");
        let price = 0;

        while (appData.isString(name)) {
            name = prompt("Какой дополнительный тип услуги нужен?", "Введите текстовое название!");
        }
  
        do {
          price = prompt("Сколько это будет стоить?");
        } while (!appData.isNumber(price));
        
        appData.screens[name] = +price; 
        // Если ввести два одинаковых названия, останется только одно. Вариант переименовать название (name) с помощью итератора i
      }

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
    for (let key in appData.services) {
        appData.allServicePrices += appData.services[key];
    }
  },
  getFullPrice: function () {
    appData.fullPrice =  +appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    if (!appData.title) return appData.title;
    appData.title = appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase().trim();
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrices =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrices);
    console.log(appData.screens);
    /*
    for (let key in appData){
        console.log("Ключ: " + key);
    }
    */
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  isString: function (str) {
    if (isNaN(str) == 'true') {
        return false
    } else {
        return true
    }
  },
  start: function () {
    appData.asking();

    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    
    appData.logger();
  }
};

appData.start();