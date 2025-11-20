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

  const loginclose = document.getElementById("login-close");
    const profile = document.querySelector(".profile");
    const login = document.querySelector(".login");

    profile.addEventListener("click", () => {
        login.classList.toggle("invisible");
        loginclose.classList.toggle("invisible");
    })

    loginclose.addEventListener("click", () => {
        login.classList.toggle("invisible");
        loginclose.classList.toggle("invisible");
    })
});