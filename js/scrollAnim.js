document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".benefits__item, .features__item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Добавляем класс с задержкой для каждого элемента
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 300); // 300ms задержка между элементами
        }
      });
    },
    {
      threshold: 0.3, // Срабатывает когда 30% элемента видно
      rootMargin: "0px 0px -50px 0px", // Отступ снизу для раннего срабатывания
    }
  );

  items.forEach((item) => observer.observe(item));
});
