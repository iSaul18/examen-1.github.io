"user strict";

const carruselContainer = document.querySelector(".bp-img-box");
const BTNcarrusel = document.querySelectorAll(".btn-circle");

const testimonialContainer = document.querySelector(".testimonial-container");
const BTNtestimonial = document.querySelectorAll(".testimonial-btn");

// CARRUSEL TRANSLATE
BTNcarrusel.forEach((button, i) => {
  button.addEventListener("click", () => {
    BTNcarrusel.forEach((buttonOff) => {
      buttonOff.classList.remove("active");
    });
    button.classList.add("active");
    carruselContainer.style.transform = `translateX(-${i * 8}%)`;
  });
});

// TESTIMONIALES TRANSLATE
BTNtestimonial.forEach((button, i) => {
  button.addEventListener("click", () => {
    BTNtestimonial.forEach((buttonOff) => {
      buttonOff.classList.remove("testimonial-btn-active");
    });
    button.classList.add("testimonial-btn-active");
    if (i === 0) {
      testimonialContainer.style.transform = `translateX(+${i + 2}%)`;
    } else {
      testimonialContainer.style.transform = `translateX(-${i * 9.5}%)`;
    }
  });
});
