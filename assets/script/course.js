'use strict';


document.addEventListener("DOMContentLoaded", () => {
    const gameselectbtn = document.querySelector(".select-game");
    const gameselector = document.querySelector(".gameselector");
    const games = document.querySelectorAll(".gameselector div");
    const submitBtn = document.querySelector(".submitbtn");
    const closeBtn = document.getElementById("selector-close");

    let selectedGame = null;

    closeBtn.addEventListener("click", () => {
            gameselector.classList.toggle("invisible");
            closeBtn.classList.toggle("invisible");
        });

    gameselectbtn.addEventListener("click", () => {
            gameselector.classList.toggle("invisible");
            closeBtn.classList.toggle("invisible");
        });

    

    games.forEach(option => {
        option.addEventListener("click", () => {
          if(option.classList.contains("active")){
            option.classList.remove("active");
            selectedGame = null;
            return;
          }
          games.forEach(o => o.classList.remove("active"));
          option.classList.add("active");

          selectedGame = option.textContent.trim();
        });
    });
    submitBtn.addEventListener("click", () => {
          if(!selectedGame){
            alert("Please select a game before submitting.");
          }
          if (selectedGame === "Valorant") window.location.href = "./fps.html";
          if (selectedGame === "Fortnite") window.location.href = "./fps.html";
          if (selectedGame === "League of Legends") window.location.href = "./moba.html";
          if (selectedGame === "Dota 2") window.location.href = "./moba.html";
          
    }); 
});


