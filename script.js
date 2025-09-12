// Abre modal
const openBtn = document.querySelector(".open-carousel");
const modal = document.getElementById("carouselModal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Carrossel
const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsNav = document.querySelector(".carousel-dots");

let currentIndex = 0;

// Criar dots
items.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dotsNav.appendChild(dot);

  dot.addEventListener("click", () => {
    currentIndex = i;
    updateCarousel();
  });
});

const dots = Array.from(dotsNav.children);

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});