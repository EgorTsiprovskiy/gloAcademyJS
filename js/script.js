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

const totalInput = () => {
  let list = document.getElementsByClassName("total-input");
  for (let i = 0; i < list.length; i++) {}
};
let listScreen = document.querySelectorAll(".screen");
let allSelect = document.querySelectorAll(".main-controls__select select");
let allInput = document.querySelectorAll(
  ".main-controls__input input[placeholder='Количество экранов']"
);

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
    this.addTitle();
    butCalculate.addEventListener("click", this.start.bind(appData));
    butPlus.addEventListener("click", this.addScreenBlock.bind(appData));
    butReset.addEventListener("click", this.reset.bind(appData));

    inputRange.addEventListener("input", this.addRollback.bind(appData));
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
  },
  addScreens: function () {
    listScreen = document.querySelectorAll(".screen");
    this.screens = [];
    listScreen.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const selectName = select.options[select.selectedIndex].textContent;
      const input = screen.querySelector("input");

      if (selectName == "Тип экранов" || +input.value == 0) {
        this.isError = true;
      } else {
        this.isError = false;
      }

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });

      this.screens.forEach((item) => {
        totalCount.value = +totalCount.value + item.count;
      });
    });
  },
  addScreenBlock: function () {
    const cloneScreen = listScreen[0].cloneNode(true);
    listScreen[listScreen.length - 1].after(cloneScreen);
  },
  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrices =
      this.fullPrice - this.fullPrice * (this.rollback / 100);
    totalCountRollback.value = this.servicePercentPrices;
  },
  addRollback: function (event) {
    spanRange.innerText = event.target.value;
    this.rollback = event.target.value;
  },
  /*
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
  */
  blockAttribute: function () {
    allSelect = document.querySelectorAll(".main-controls__select select");
    allInput = document.querySelectorAll(
      ".main-controls__input input[type = 'text']"
    );

    allInput.forEach((item) => {
      item.setAttribute("disabled", "");
    });
    allSelect.forEach((item) => {
      item.setAttribute("disabled", "");
    });
  },
  addDisabled: function () {
    allSelect = document.querySelectorAll(".main-controls__select select");
    allInput = document.querySelectorAll(
      ".main-controls__input input[placeholder='Количество экранов']"
    );

    allInput.forEach((item) => {
      item.removeAttribute("disabled");
    });
    allSelect.forEach((item) => {
      item.removeAttribute("disabled");
    });
  },
  reset: function () {
    this.addDisabled();
    this.screens = [];
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type = checkbox]");
      check.checked = false;
    });
    let removeListScreen = (list) => {
      if (list.length !== 1) {
        list[list.length - 1].remove();
        listScreen = document.querySelectorAll(".screen");
        removeListScreen(listScreen);
      } else {
        allSelect = document.querySelectorAll(".main-controls__select select");
        allInput = document.querySelectorAll(
          ".main-controls__input input[placeholder='Количество экранов']"
        );
        allInput[0].value = "";
        allSelect[0].value = "";
      }
    };

    removeListScreen(listScreen);
    butCalculate.style.display = null;
    butReset.style.display = "none";
    inputRange.value = 0;
    spanRange.innerText = "0%";
    total.value = 0;
    totalCount.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;
  },
  start: function () {
    this.blockAttribute();
    this.addScreens();
    if (this.isError) {
      alert("Поля Тип экранов и Количество не могут быть пустыми!");
    } else {
      this.addServices();
      this.addPrices();
      this.showResult();
      butCalculate.style.display = "none";
      butReset.style.display = null;
    }
  },
};

appData.init();
