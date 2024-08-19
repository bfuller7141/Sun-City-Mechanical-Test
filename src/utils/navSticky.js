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
