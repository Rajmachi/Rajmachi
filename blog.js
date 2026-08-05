 // Smooth scroll to top on blog card click (optional)
    document.querySelectorAll('.blog-card').forEach(card => {
      card.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // Toggle navbar for mobile (future enhancement)
    // Add JS here if responsive navbar is added




    // blog-script.js
// document.addEventListener('DOMContentLoaded', () => {
//   const toggle = document.querySelector('.menu-toggle');
//   const navLinks = document.querySelector('.nav-links');

//   toggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//   });
// });
















// Toggle mobile nav menu
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Scroll to top on blog card click
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  console.log("Blog Page Loaded: Navbar Ready, Floating Buttons Active.");
});
