// 1. Navbar: add a shadow class once the user scrolls
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// 2. Cards: clicking a destination card highlights it and updates the sign-up hint
const cards = document.querySelectorAll(".card");
const hint = document.querySelector("#signup-hint");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("card-selected"));
    card.classList.add("card-selected");
    const city = card.querySelector("h3").innerText;
    hint.innerText = `Great choice! Sign up and we'll send you our best ${city} weekend plan.`;
    document.querySelector("#signup").scrollIntoView({ behavior: "smooth" });
  });
});
