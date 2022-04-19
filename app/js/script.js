console.log("Load script.js");

// Instantiating the global app object
var app = {};

//* Search Input

const search = document.querySelector(".search");
const searchIcon = document.querySelector(".search__icon");
const searchInput = document.querySelector(".search__input");
const searchClose = document.querySelector(".search__close");
const searchDelete = document.querySelector(".search__delete");

searchIcon.addEventListener("click", () => {
  search.classList.add("search-open");
  searchInput.focus();
});

searchClose.addEventListener("click", () => {
  search.classList.remove("search-open");
  // Search field'ı temizle ve kapat.
  searchInput.value = "";
});

searchDelete.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
});

//* Toggle Nav Bar

const nav = document.querySelector(".nav-bar");
const navBurger = document.querySelector(".nav-bar-burger");
const navBurgerDiv1 = document.querySelector(".nav-bar-burger-inc-1")
const navBurgerDiv2 = document.querySelector(".nav-bar-burger-inc-2")
const navBurgerDiv3 = document.querySelector(".nav-bar-burger-inc-3")

navBurger.addEventListener("click", () => {
  // Toggle Nav
  nav.classList.toggle("show");
  navBurgerDiv1.classList.toggle("nav-bar-burger-inc");
  navBurgerDiv2.classList.toggle("nav-bar-burger-inc");
  navBurgerDiv3.classList.toggle("nav-bar-burger-inc");
});
