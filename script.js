document.querySelectorAll(".faq-question").forEach(item=>{
item.addEventListener("click",()=>{
const answer=item.nextElementSibling;
answer.style.display = answer.style.display === "block" ? "none" : "block";
});
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});