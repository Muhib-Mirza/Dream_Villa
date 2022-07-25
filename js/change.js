let x = 0;

function toggle() {
  x++;
  console.log("Hello");
  console.log(x);
  if (x % 2 == 1) {
    document.querySelector(".nav-mobile-list-container").style.transform =
      "translate(0,-0.58rem)";
    document.querySelector(".mobile-nav-list").style.transform = "translate(0)";
  }
  if (x % 2 == 0) {
    document.querySelector(".nav-mobile-list-container").style.transform =
      "translateX(-11rem)";
    document.querySelector(".mobile-nav-list").style.transform =
      "translateX(-11rem)";
  }
}

function remove() {
  document.querySelector(".nav-mobile-list-container").style.transform =
    "translateX(-11rem)";
}

function changeColorR() {
  document.querySelector(".rent-btn").style.background = "#00D4FF";
  document.querySelector(".rent-btn").style.color = "white";
  document.querySelector(".buy-btn").style.background = "#F0F0F0";
  document.querySelector(".buy-btn").style.color = "#AAAAAA";
}

function defaultColorR() {
  document.querySelector(".rent-btn").style.background = "#F0F0F0";
  document.querySelector(".rent-btn").style.color = "#AAAAAA";
  document.querySelector(".buy-btn").style.background = "#00D4FF";
  document.querySelector(".buy-btn").style.color = "white";
}

function buyChange() {
  console.log("Hello");
  document.querySelector(".buy-container").style.display = "flex";
  document.querySelector(".rent-container").style.display = "none";
}

function rentChange() {
  console.log("Hello");
  document.querySelector(".buy-container").style.display = "none";
  document.querySelector(".rent-container").style.display = "flex";
}

window.addEventListener("scroll", () => {
  const contain = document.querySelector(".section-1");
  const z = contain.getBoundingClientRect().y;
  if (z < 550) {
    document.querySelector(".section-1").style.transform = "translateY(0)";
    document.querySelector(".section-1").style.opacity = "1";
  }
});

window.addEventListener("scroll", () => {
  const contain = document.querySelector(".icon-container");
  const z = contain.getBoundingClientRect().y;
  if (z < 350) {
    document.querySelector(".home-container").style.opacity = "1";
    document.querySelector(".home-container").style.transform = "translateY(0)";
    document.querySelector(".land").style.opacity = "1";
    document.querySelector(".land").style.transform = "translateY(0)";
    document.querySelector(".office").style.opacity = "1";
    document.querySelector(".office").style.transform = "translateY(0)";
    document.querySelector(".factory").style.opacity = "1";
    document.querySelector(".factory").style.transform = "translateY(0)";

  }
});
