const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });











  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.feature-box').forEach(box => {
    observer.observe(box);
  });
  observer.observe(document.querySelector('.why-choose h2'));





 ScrollReveal().reveal('.testimonial-card', {
  interval: 200,
  duration: 1000,
  distance: '40px',
  origin: 'bottom',
  easing: 'ease-out',
  reset: false
});
























function sendToWhatsApp() {
  const name = document.getElementById('name').value;
  const people = document.getElementById('people').value;
  const date = document.getElementById('date').value;
  const message = document.getElementById('message').value;

  const msg = `*Rajmachi Booking Request*%0AName: ${name}%0APeople: ${people}%0ADate: ${date}%0AMessage: ${message}`;
  const url = `https://wa.me/919158413493?text=${msg}`;

  window.open(url, '_blank');
}







// Click to full screen preview toggle
const galleryItems = document.querySelectorAll('.grid-item img');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    if (img.classList.contains('fullscreen')) {
      img.classList.remove('fullscreen');
      document.body.style.overflow = '';
    } else {
      galleryItems.forEach(i => i.classList.remove('fullscreen'));
      img.classList.add('fullscreen');
      document.body.style.overflow = 'hidden';
    }
  });
});






