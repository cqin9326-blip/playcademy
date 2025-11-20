document.addEventListener("DOMContentLoaded", () => {
  const backtomainbtn = document.querySelector(".backtomain");
  const wrapper = document.getElementById("coach-wrapper");

  const icon = [
    "./assets/media/valoranticon.png",
    "./assets/media/fortniteicon.png"
  ]

  const sessiontype = [
    "1 Session: 1 hr",
    "1 Sessions: 1.5 hrs",
  ]

  for (let i = 1; i < 11; i++) {
    const pfp = `./assets/media/pfp${(i % 10) + 1}.png`;
    const gameicon = icon[i % 2];
    const price = (10 + (Math.floor(Math.random() * 30))).toFixed(2);
    const rating = (5 + (Math.floor(Math.random() * 5))).toFixed(1);
    const session = sessiontype[i % 2];

    const coachcard = `
            <div class="coach-card">
              <div class="coach-picture">
                <img src="${pfp}" alt="Coach image">
                <img src="${gameicon}">
              </div>
              <h3>fps-coach-${i}</h3>
              <p>Rating: ${rating}</p>
              <p>${session}</p>
              <p>Price: $${price}</p>
              <button class="book-now">Book Now</button>
            </div>
      `
    wrapper.insertAdjacentHTML("beforeend", coachcard);
    
  }
  const morebutton = `
    <button id="viewmorebtn" class="view-more">View More</button>`

  wrapper.insertAdjacentHTML("beforeend", morebutton);

  const viewallbtn = document.getElementById("viewallbtn");
  viewallbtn.addEventListener("click", () => {
    wrapper.classList.toggle("collapsed");
    wrapper.classList.toggle("expanded");
    viewallbtn.innerHTML = wrapper.classList.contains("collapsed") ? "View All" : "Show Less";
  })


  if (backtomainbtn) {
    backtomainbtn.addEventListener("click", () => {
      window.location.href = "./courses.html";
    });
  }
});