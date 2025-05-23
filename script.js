// script.js

// Header com mudança de estilo ao scroll (opcional)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('load', () => {
    document.querySelector('header').classList.add('scrolled');
});