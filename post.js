// script.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "#ff5733";
    });

    link.addEventListener("mouseout", () => {
      link.style.color = "#007bff";
    });
  });

  console.log("Pawna Lake Camping Blog Loaded");
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

 