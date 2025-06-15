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
  });

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const icon = darkModeToggle.querySelector('.material-icons-outlined');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.textContent = 'light_mode';
}

darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    icon.textContent = newTheme === 'dark' ? 'light_mode' : 'dark_mode';
});