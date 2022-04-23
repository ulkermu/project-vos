console.log("Load script.js");

// Instantiating the global app object
var app = {};

//* Toggle Nav Bar

const menu = document.querySelector(".menu");
const menuLink = document.querySelector(".nav-bar-burger");
const menuOverlay = document.querySelector(".menu-overlay");
const burger1 = document.querySelector(".nav-bar-burger-inc-1");
const burger2 = document.querySelector(".nav-bar-burger-inc-2");
const burger3 = document.querySelector(".nav-bar-burger-inc-3");

menuLink.addEventListener("click", () => {
  menuOverlay.classList.toggle("open");
  burger1.classList.toggle('nav-bar-burger-inc');
  burger2.classList.toggle('nav-bar-burger-inc');
  burger3.classList.toggle('nav-bar-burger-inc');
});

//* Search Input

const searchIcon = document.querySelector(".search__icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("fade");
});
