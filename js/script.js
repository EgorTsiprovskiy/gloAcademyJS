"use strict";

const title = document.getElementsByTagName("h1")[0];
const butCalculate = document.getElementById("start");
const butReset = document.getElementById("reset");
const butPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector(".rollback input[type = 'range']");
const spanRange = document.querySelector(
  ".rollback span[class = 'range-value']"
);
const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

const inputRollback = document.querySelector(".rollback input[type = 'range']");
const spanRollback = document.getElementsByClassName("range-value");

const totalInput = function () {
  let list = document.getElementsByClassName("total-input");
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
};
let listScreen = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrices: 0,
  servicesPercent: {},
  servicesNumber: {},
  isError: false,
  init: function () {
    appData.addTitle();
    butCalculate.addEventListener("click", appData.start);
    butPlus.addEventListener("click", appData.addScreenBlock);

    inputRange.addEventListener("input", appData.addRollback);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  showResult: function() {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
  },
  addScreens: function () {
    listScreen = document.querySelectorAll(".screen");
    appData.screens = [];
    listScreen.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const selectName = select.options[select.selectedIndex].textContent;
      const input = screen.querySelector("input");

      if (selectName == "Тип экранов" || +input.value == 0){
        appData.isError = true;
      } else {
        appData.isError = false;
      }

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });

      appData.screens.forEach(function (item){
        totalCount.value = +totalCount.value + item.count;
      });

    });
  },
  addScreenBlock: function () {
    const cloneScreen = listScreen[0].cloneNode(true);
    listScreen[listScreen.length - 1].after(cloneScreen);
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
      console.log("screen.price" + screen.price);
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;

      appData.servicePercentPrices =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);

      totalCountRollback.value = appData.servicePercentPrices
  },
  addRollback: function (event) {
    spanRange.innerText = event.target.value; 
    appData.rollback = event.target.value;
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrices);
    console.log(appData.screens);
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  isString: function (str) {
    if (isNaN(str) == "true") {
      return false;
    } else {
      return true;
    }
  },
  start: function () {
    
    appData.addScreens();
    if (appData.isError) {
      alert("Поля Тип экранов и Количество не могут быть пустыми!");
      console.log(appData.isError);
    } else {
    console.log("no error");
    appData.addServices();
    appData.addPrices();
    appData.showResult();
    }
    console.log(appData);

  },
};

appData.init();
