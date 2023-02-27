const burgerMenu = document.querySelector("[data-burger-menu]");
const mobileMenu = document.querySelector("[data-mobile-navigation]");

burgerMenu.addEventListener("click", () => {
  console.log(mobileMenu);
  mobileMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});
