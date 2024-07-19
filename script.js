// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjusted for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Toggle mobile navigation menu
const nav = document.getElementById('nav');
const toggleButton = document.querySelector('.nav-toggle');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close navigation menu when a link is clicked (for mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Add hover effects on buttons and links
document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.add('hover');
  });
  element.addEventListener('mouseout', () => {
    element.classList.remove('hover');
  });
});
