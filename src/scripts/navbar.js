// navbar.js

document.addEventListener("DOMContentLoaded", function() {
    const navTop = document.querySelector('.nav-top');
    const navBottom = document.querySelector('.nav-bottom');
    const stickyClass = 'sticky';
    
    if (navTop && navBottom) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > navTop.offsetHeight) {
                navBottom.classList.add(stickyClass);
            } else {
                navBottom.classList.remove(stickyClass);
            }
        });
    }

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            const isOpen = navMenu.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen.toString());
        });
    } else {
        console.error("Hamburger or navigation menu not found.");
    }
});
