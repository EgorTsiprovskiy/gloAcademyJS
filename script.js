"use strict";
const listBooks = document.getElementsByClassName("book");
const fon = document.getElementsByTagName("body");
const listHref = document.querySelectorAll(".book a[target='_blank']");
const banner = document.querySelector(".adv");
const listLiBook2 = listBooks[0].childNodes[3].children;
const listLiBook5 = listBooks[5].childNodes[3].children;
const listUlBook6 = listBooks[2].childNodes[3];
const listLiBook6 = listBooks[2].childNodes[3].children;
const chapter8 = document.createElement("li");

chapter8.textContent = "Глава 8: За пределами ES6";

listUlBook6.append(chapter8);
listLiBook6[10].after(listLiBook6[9]);

listBooks[1].after(listBooks[0]);
listBooks[1].after(listBooks[4]);
listBooks[2].after(listBooks[4]);
listBooks[3].after(listBooks[5]);

listLiBook2[3].after(listLiBook2[6]);
listLiBook2[4].after(listLiBook2[8]);
listLiBook2[9].after(listLiBook2[2]);

listLiBook5[1].after(listLiBook5[9]);
listLiBook5[2].after(listLiBook5[4]);
listLiBook5[5].after(listLiBook5[4]);
listLiBook5[8].after(listLiBook5[6]);

listHref[4].innerText = "Книга 3. this и Прототипы Объектов";
fon[0].style.backgroundImage = "url(./image/you-dont-know-js.jpg)"

banner.style.display = "none";