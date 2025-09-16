// Seleciona todos os botões que abrem carrossel
const openBtns = document.querySelectorAll(".open-carousel");
const modal = document.getElementById("carouselModal");
const closeBtn = modal.querySelector(".close");
const track = modal.querySelector(".carousel-track");
const items = Array.from(track.children);
const prevBtn = modal.querySelector(".prev");
const nextBtn = modal.querySelector(".next");
const dotsNav = modal.querySelector(".carousel-dots");

let currentIndex = 0;

// Criar dots
dotsNav.innerHTML = ""; // limpa antes de criar
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

// Função para atualizar o carrossel
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[currentIndex]) dots[currentIndex].classList.add("active");
}

// Abrir modal
openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    currentIndex = 0;
    updateCarousel();
  });
});

// Fechar modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.style.display = "none";
});

// Botões prev/next
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

// Garante transição suave
track.style.transition = "transform 0.5s ease-in-out";
