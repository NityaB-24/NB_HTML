// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

window.addEventListener("load", () => {
  const image = document.querySelector(".hero img");
  const h1section = document.querySelector(".hero h1");
  const psection = document.querySelector(".hero p");
  image.classList.add("loaded");
  h1section.classList.add("loaded");
  psection.classList.add("loaded");
});
