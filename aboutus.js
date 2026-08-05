// Add fade-in scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".feature, .highlights li").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".feature, .highlights li").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
});
