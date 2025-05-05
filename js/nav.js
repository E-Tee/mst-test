window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    // Изменение после 100px прокрутки
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
