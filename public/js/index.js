const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".menu");
const navMenu = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const content = document.querySelector(".main-content");

let showMenu = false;

menuBtn.addEventListener("click", toogleMenu);

function toogleMenu() {
  if (!showMenu) {
    content.classList.add("open");
    hamburger.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    content.classList.add("open");
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
