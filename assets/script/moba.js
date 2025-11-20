'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const backtomainbtn = document.querySelector(".backtomain");
  const wrapper = document.getElementById("coach-wrapper");

  const icons = [
    "./assets/media/lolicon.png",
    "./assets/media/dotaicon.png"
  ];

  const sessiontype = [
    "1 Session: 1 hr",
    "1 Sessions: 1.5 hrs"
  ];

  let coachCount = 0;

  function generateCoaches(amount) {
    for (let i = 0; i < amount; i++) {
      coachCount++;
      const pfp = `./assets/media/pfp${(coachCount % 10) + 1}.png`;
      const gameicon = icons[coachCount % 2];
      const price = (10 + Math.floor(Math.random() * 30)).toFixed(2);
      const rating = (5 + Math.floor(Math.random() * 5)).toFixed(1);
      const session = sessiontype[coachCount % 2];

      const card = `
        <div class="coach-card">
          <div class="coach-picture">
            <img src="${pfp}" alt="Coach image">
            <img src="${gameicon}">
          </div>
          <h3>fps-coach-${coachCount}</h3>
          <p>Rating: ${rating}</p>
          <p>${session}</p>
          <p>Price: $${price}</p>
          <button class="book-now">Book Now</button>
        </div>
      `;
      wrapper.insertAdjacentHTML("beforeend", card);
    }
  }
  generateCoaches(4);
  addViewMoreButton();

  function addViewMoreButton() {
    wrapper.insertAdjacentHTML("beforeend", `
      <button id="viewmorebtn" class="view-more">View More</button>
    `);
  }
  document.addEventListener("click", (e) => {
    if (e.target.id === "viewmorebtn") {
      e.target.remove();
      generateCoaches(10);
      addViewMoreButton();
    }
  });

  const viewallbtn = document.getElementById("viewallbtn");
  viewallbtn.addEventListener("click", () => {
    wrapper.classList.toggle("collapsed");
    wrapper.classList.toggle("expanded");

    viewallbtn.innerHTML = wrapper.classList.contains("collapsed")
      ? "View All"
      : "Show Less";
  });

  if (backtomainbtn) {
    backtomainbtn.addEventListener("click", () => {
      window.location.href = "./courses.html";
    });
  }

  const backtotopbtn = document.querySelector(".backtotop");
  const mobabanner = document.getElementById("mobabanner");
  mobabanner.addEventListener("mouseenter", () => {
    backtotopbtn.classList.add("off");
  });
  mobabanner.addEventListener("mouseleave", () => {
    backtotopbtn.classList.remove("off");
  })
});