let index = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
    slides.forEach((slide, i) => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[n].classList.add("active");
    dots[n].classList.add("active");
}

function changeSlide(n) {
    index = (index + n + slides.length) % slides.length;
    showSlides(index);
}

function setSlide(n) {
    index = n;
    showSlides(n);
}

document.querySelector(".flecha.izquierda").onclick = () => changeSlide(-1);
document.querySelector(".flecha.derecha").onclick = () => changeSlide(1);
dots.forEach((dot, i) => dot.onclick = () => setSlide(i));

setInterval(() => changeSlide(1), 5000);
showSlides(index);
