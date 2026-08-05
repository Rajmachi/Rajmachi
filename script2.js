let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');

// Set width dynamically
slider.style.width = `${slides.length * 100}%`;

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
  updateDots();
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

function updateDots() {
  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === currentIndex) dot.classList.add('active-dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
  });
}

// Init
updateDots();
showSlide(currentIndex);

// Auto slide
let sliderInterval = setInterval(() => moveSlide(1), 6000);















ScrollReveal().reveal('.about-text', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: false
});
ScrollReveal().reveal('.about-img', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 400,
  reset: false
});






ScrollReveal().reveal('.review-text', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: false
});

ScrollReveal().reveal('.review-img', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 400,
  reset: false
});



ScrollReveal().reveal('.experience-text', {
  origin: 'left',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false
});

ScrollReveal().reveal('.experience-image', {
  origin: 'right',
  distance: '60px',
  duration: 1000,
  delay: 400,
  reset: false
});










// Optional: Scroll reveal effect using GSAP
gsap.from(".camping-text", {
  scrollTrigger: "#rajmachi-camping",
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out"
});
gsap.from(".camping-image img", {
  scrollTrigger: "#rajmachi-camping",
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out"
});


gsap.from(".site-footer", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".site-footer",
    start: "top 90%",
    toggleActions: "play none none none"
  },
  duration: 1.2,
  ease: "power4.out"
});














// Simple scroll animation
// Smooth scroll to booking section
document.querySelector('.homestay-book-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('booking.htm').scrollIntoView({ behavior: 'smooth' });
});






 document.querySelector('.homestay-campfire-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('booking.htm').scrollIntoView({ behavior: 'smooth' });
  });












  // Optional Animation on Load
// Animate on scroll in future, or CTA alert
document.querySelector(".book-btn").addEventListener("click", () => {
  alert("Booking feature coming soon! 🚀");
});

