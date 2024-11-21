// Carrusel de proyectos
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

// Event listeners for manual navigation
document.querySelector('.flecha.derecha').addEventListener('click', nextSlide);
document.querySelector('.flecha.izquierda').addEventListener('click', prevSlide);

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Alternar entre modo claro y oscuro
const modoToggle = document.getElementById('modo-toggle');
modoToggle.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
    if (document.body.classList.contains('modo-oscuro')) {
        modoToggle.textContent = 'Modo Claro';
    } else {
        modoToggle.textContent = 'Modo Oscuro';
    }
});
