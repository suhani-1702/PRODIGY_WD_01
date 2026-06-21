/* ==================== 
   PRODIGY INFOTECH
   Main JavaScript File
   ==================== */

// Get navbar and related elements
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navBtn = document.querySelector('.nav-btn');
const sections = document.querySelectorAll('.section');

// Update navbar colors based on which section is currently visible
function updateNavbarColors() {
  let currentTheme = 'dark';
  
  // Check which section is in the middle of the viewport
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentTheme = section.getAttribute('data-theme') || 'dark';
    }
  });
  
  // Apply light-text class to nav links if on light section
  navLinks.forEach(link => {
    if (currentTheme === 'light') {
      link.classList.add('light-text');
    } else {
      link.classList.remove('light-text');
    }
  });
  
  // Apply dark-btn class to button if on light section
  if (currentTheme === 'light') {
    navBtn.classList.add('dark-btn');
  } else {
    navBtn.classList.remove('dark-btn');
  }
}

// Handle scroll events
window.addEventListener('scroll', () => {
  // Add scrolled class when user scrolls down
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Update colors based on current section
  updateNavbarColors();
});

// Handle smooth scrolling for nav links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Handle Get Started / Contact Us button
function handleGetStarted() {
  alert('Welcome!Thanks for contacting at Prodigy Infotech');
}

// Initial color update on page load
updateNavbarColors();
