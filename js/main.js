//init
let navbar = document.getElementById("navbar");
let nav_links = document.querySelectorAll(".nav-link");
let toTop = document.getElementById("toTop");
let hamburg = document.getElementById("hamburg");
let mask = document.getElementById("mask");

navbar.classList.remove("on-page");
toTop.style.opacity = "0";

//Hamburg
hamburg.addEventListener("click", () => {
  navbar.classList.add("small_menu");
});
mask.addEventListener("click", () => {
  navbar.classList.remove("small_menu");
});

nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("small_menu");
  });
});

//Navbar scroll
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    //At top of screen
    navbar.classList.remove("on-page");
    toTop.style.opacity = "0";
  } else {
    navbar.classList.add("on-page");
    toTop.style.opacity = "1";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
