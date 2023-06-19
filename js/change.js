let x = 0;

function toggle() {
  x++;
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

//Section 1 animation
window.addEventListener("scroll", () => {
  const contain = document.querySelector(".section-1");
  let z = contain.getBoundingClientRect().y;
  if (z < 550) {
    document.querySelector(".section-1").style.transform = "translateY(0)";
    document.querySelector(".section-1").style.display = "block";
  }
});

//Cards Animation
window.addEventListener("scroll", () => {
  const contain = document.querySelector(".icon-container");
  let z = contain.getBoundingClientRect().y;
  if (z < 450) {
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


//Secction 2 Animation
window.addEventListener("scroll", () => {
  const contain = document.querySelector(".section-2");
  let z = contain.getBoundingClientRect().y;
  if(z < 600){
    document.querySelector(".section-2").style.transform = "translateY(0)";
    document.querySelector(".section-2").style.opacity = "1";
  }
});


window.addEventListener('scroll', () => {
  const contain = document.querySelector(".card-container");
  let z = contain.getBoundingClientRect().y;
  if(z < 550){
    document.querySelector(".card-container").style.transform = "translateY(0)";
    document.querySelector(".card-container").style.opacity = "1";
  }
});

window.addEventListener('scroll', () => {
  const contain = document.querySelector(".p-2");
  let z = contain.getBoundingClientRect().y;
  if(z < 550){
    document.querySelector(".p-2").style.transform = "translateY(0)";
    document.querySelector(".p-2").style.opacity = "1";
  }
});

window.addEventListener('scroll', () => {
  const contain = document.querySelector(".p-1");
  let z = contain.getBoundingClientRect().y;
  if(window.innerWidth > 900){
  if(z < 550){
    document.querySelector(".p-1").style.transform = "translateY(0)";
    document.querySelector(".p-1").style.opacity = "1";
  }
}
});