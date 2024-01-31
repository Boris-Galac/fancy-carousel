const carouselNextBtn = document.querySelector(".next");
const carouselPrevBtn = document.querySelector(".prev");
const slider = document.querySelector(".slider");

carouselNextBtn.addEventListener("click", (e) => {
  const slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
});

carouselPrevBtn.addEventListener("click", (e) => {
  const slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
});
