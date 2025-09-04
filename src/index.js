 const hamburger = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    // Toggle the 'hidden' class to show/hide the mobile menu
    mobileMenu.classList.toggle('hidden');
    
    // Toggle aria-expanded for accessibility
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !isExpanded);
  });