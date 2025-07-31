// =================== Mobile Menu Toggle ===================
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const exitMenu = document.getElementById("exit-menu");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close the menu when "Exit" is clicked (only for mobile)
exitMenu.addEventListener("click", () => {
  navLinks.classList.remove("show");
});

// Close menu when a link is clicked (mobile behavior)
const menuItems = document.querySelectorAll(".nav-links li a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("show");
    }
  });
});

// =================== Optional: Close menu on outside click (mobile) ===================
document.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !toggle.contains(event.target)) {
    navLinks.classList.remove("show");
  }
});
