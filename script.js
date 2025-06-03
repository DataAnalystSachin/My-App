// Highlight the active nav link based on the current page
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const current = window.location.pathname.split('/').pop();
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Prevent default for current page links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href') === current) {
        e.preventDefault();
      }
    });
  });
});