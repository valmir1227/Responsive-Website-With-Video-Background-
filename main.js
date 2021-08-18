const menuBtn = document.querySelector(".menu-btn");
const navItens = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navItens.classList.toggle("active");
});
