'use strict';
import { getElement, listen } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
const backToTopBtn = getElement('backToTop');

listen('click', backToTopBtn, () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const backtotopbtn = document.querySelector(".backtotop");
const herobanner = document.getElementById("herobanner");
    herobanner.addEventListener("mouseenter", () => {
    backtotopbtn.classList.add("off");
  });
  herobanner.addEventListener("mouseleave", () => {
    backtotopbtn.classList.remove("off");
  })
});