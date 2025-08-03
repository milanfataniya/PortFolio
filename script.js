// =================== Mobile Menu Toggle ===================
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const exitMenu = document.getElementById("exit-menu");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggle.setAttribute("aria-expanded", navLinks.classList.contains("show"));
});

// Keyboard accessibility for menu toggle
toggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    navLinks.classList.toggle("show");
    toggle.setAttribute("aria-expanded", navLinks.classList.contains("show"));
    e.preventDefault();
  }
});

// Close the menu when "Exit" is clicked (only for mobile)
exitMenu.addEventListener("click", () => {
  navLinks.classList.remove("show");
  toggle.setAttribute("aria-expanded", "false");
});

// Close menu when a link is clicked (mobile behavior)
const menuItems = document.querySelectorAll(".nav-links li a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      navLinks.classList.remove("show");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Close menu on outside click (mobile)
document.addEventListener("click", (event) => {
  if (
    window.innerWidth <= 900 &&
    !navLinks.contains(event.target) &&
    !toggle.contains(event.target)
  ) {
    navLinks.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// =================== Navbar Hide on Scroll Down, Show on Scroll Up ===================
let lastScrollY = window.scrollY;
let ticking = false;
const navbar = document.querySelector('.navbar');

function handleNavbarScroll() {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // Scrolling down
    navbar.classList.add('navbar-hide');
  } else {
    // Scrolling up
    navbar.classList.remove('navbar-hide');
  }
  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(handleNavbarScroll);
    ticking = true;
  }
});

// =================== Project Card Flip (Touch & Click) ===================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  // Touch support
  card.addEventListener('touchstart', function(e) {
    this.classList.toggle('flipped');
    // Prevent double tap zoom
    e.preventDefault();
  });
  // Keyboard accessibility
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.classList.toggle('flipped');
      e.preventDefault();
    }
  });
  // Mouse click
  card.addEventListener('click', function(e) {
    // Only flip if not selecting text
    if (e.target.tagName !== 'A' && e.target.tagName !== 'UL' && e.target.tagName !== 'LI') {
      this.classList.toggle('flipped');
    }
  });
  // Remove flip on blur (optional)
  card.addEventListener('blur', function() {
    this.classList.remove('flipped');
  });
});

// =================== Scroll Reveal Animations ===================
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  // Add .reveal to all main sections
  document.querySelectorAll('section, .hero').forEach(el => el.classList.add('reveal'));
  revealOnScroll();
});
