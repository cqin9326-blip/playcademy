'use strict';

document.addEventListener("DOMContentLoaded", () => {

const backtotopbtn = document.querySelector(".backtotop");
const herobanner = document.getElementById("herobanner");
    herobanner.addEventListener("mouseenter", () => {
    backtotopbtn.classList.add("off");
  });
  herobanner.addEventListener("mouseleave", () => {
    backtotopbtn.classList.remove("off");
  })
});