const icon = document.querySelector(".icon");
const input = document.querySelector(".input");

icon.addEventListener("click", function () {
  input.classList.toggle("show");
  input.focus();
});
// Qidiruv
const searchIcon = document.getElementById("search-icon");
const input1 = document.querySelector(".input");

searchIcon.addEventListener("click", function () {
  input1.classList.toggle("show");

  if (input1.classList.contains("show")) {
    input1.focus();
    
  } else {
    input1.blur();
  }
});

const buttons = document.querySelectorAll("#savat, #savat1");
const count = document.getElementById("cart-count");
let total = 0;

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
    total = total + 1;
    count.textContent = total;
  });
});
const exploreBtn = document.getElementById("exploreBtn");
const discoverBtn = document.getElementById("discoverBtn");

const collection = document.querySelector(".section1");
const story = document.querySelector(".section2");

exploreBtn.addEventListener("click", function () {
  collection.scrollIntoView({ behavior: "smooth" });
});

discoverBtn.addEventListener("click", function () {
  story.scrollIntoView({ behavior: "smooth" });
});
