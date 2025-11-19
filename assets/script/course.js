// game slection
document.addEventListener("DOMContentLoaded", () => {
    const gameselectbtn = document.querySelector(".select-game");
    const gameselector = document.querySelector(".gameselector");
    const games = document.querySelectorAll(".gameselector div");
    const submitBtn = document.querySelector(".submitbtn");
    let selectedGame = null;

    gameselectbtn.addEventListener("click", () => {
            gameselector.classList.toggle("invisible");
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
          if(selectedGame){
            alert(`You have selected: ${selectedGame}`);
            gameselector.classList.toggle("invisible");
          } else {
            alert("Please select a game before submitting.");
          }

    });
});
