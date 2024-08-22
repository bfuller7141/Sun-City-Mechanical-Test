document.addEventListener("DOMContentLoaded", function() {
    const navTop = document.querySelector('.nav-top');
    const navBottom = document.querySelector('.nav-bottom');
    const stickyClass = 'sticky';
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > navTop.offsetHeight) {
            navBottom.classList.add(stickyClass);
        } else {
            navBottom.classList.remove(stickyClass);
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('open');
    });
});
