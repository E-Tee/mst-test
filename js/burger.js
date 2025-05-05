document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav");

  burger.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
});
