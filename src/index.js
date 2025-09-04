   document.addEventListener('DOMContentLoaded', function() {
            const hamburgerMenu = document.getElementById('hamburger-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            
            hamburgerMenu.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                // Toggle aria-expanded attribute
                this.setAttribute('aria-expanded', !isExpanded);
                
                // Toggle mobile menu visibility
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('show');
                
                // Toggle hamburger animation
                this.classList.toggle('open');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideNav = event.target.closest('nav');
                const isMenuOpen = hamburgerMenu.getAttribute('aria-expanded') === 'true';
                
                if (!isClickInsideNav && isMenuOpen) {
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('show');
                    hamburgerMenu.classList.remove('open');
                }
            });
            
            // Close menu when a nav link is clicked (useful for single page applications)
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('show');
                    hamburgerMenu.classList.remove('open');
                });
            });
        });