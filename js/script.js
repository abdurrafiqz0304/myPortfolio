'use strict';

const AppConfig = Object.freeze(Object.create(null, {
    author: { value: 'Abdurrafiq Bin Zakaria', enumerable: true },
    theme: { value: 'dark', enumerable: true }
}));

document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const isExpanded = navLinks.classList.contains('active');
            menuBtn.setAttribute('aria-expanded', isExpanded);
        });
    }

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});