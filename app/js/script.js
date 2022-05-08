console.log("Load script.js");

// Instantiating the global app object
var app = {};

//* Toggle Nav Bar

const menu = document.querySelector(".menu");
const mobilMenu = document.querySelector(".mobil-menu");
const menuLink = document.querySelector(".nav-bar-burger");
const menuOverlay = document.querySelector(".menu-overlay");
const burger1 = document.querySelector(".nav-bar-burger-inc-1");
const burger2 = document.querySelector(".nav-bar-burger-inc-2");
const burger3 = document.querySelector(".nav-bar-burger-inc-3");

menuLink.addEventListener("click", () => {
  menuOverlay.classList.toggle("open");
  burger1.classList.toggle("nav-bar-burger-inc");
  burger2.classList.toggle("nav-bar-burger-inc");
  burger3.classList.toggle("nav-bar-burger-inc");
});

//* Search Input

const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("fade");
});

//* Swiper

const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 194,
    depth: 219.61,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 1,
      speed: 300,
      coverflowEffect: {
        rotate: 0,
        stretch: 94,
        depth: 19.61,
        modifier: 2,
        slideShadows: true,
      },
    },
    // When window width is >= 760px
    760: {
      coverflowEffect: {
        rotate: 0,
        stretch: 194,
        depth: 219.61,
        modifier: 2,
        slideShadows: true,
      },
    },
  },
});

//* Advanced Price Choose

const circles = document.querySelectorAll(".pricing-circle");
const pricingByHours = document.getElementById("pricingByHours");
circles.forEach((circle) => {
  const index = [...circle.parentElement.children].indexOf(circle);
  circle.addEventListener("click", () => {
    const greenLine = document.querySelector(".pricing-inline");
    greenLine.style.width = `${(index * 100) / (circles.length - 1)}%`;
    pricingByHours.textContent = `${circle.getAttribute("data-price")}`;
  });
});

//* Pricing FAQ
$(document).ready(function () {
  $(".pricingFaq-slidedown-headline-mark").click(function () {
    $(this)
      .parent()
      .parent()
      .find(".pricingFaq-slidedown-hidden")
      .stop()
      .slideToggle("normal");
    $(this).parent().find(".pricingFaq-slidedown-headline-mark").toggle();
    $(this).parent().find("p").toggleClass("selected-p");
  });

  $(".pricing-circle").click(function () {
    if ($(this).hasClass("pricing-circle-bg")) {
      return;
    } else {
      $(".pricing-circle").removeClass("pricing-circle-bg");
      $(this).addClass("pricing-circle-bg");
    }
  });
});
