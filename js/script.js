'use strict';

// [SECURITY]: Mencegah Prototype Pollution pada objek konfigurasi aplikasi global
// Menggunakan Object.create(null) memastikan tiada warisan dari Object.prototype
const AppConfig = Object.freeze(Object.create(null, {
    author: { value: 'Abdurrafiq Bin Zakaria', enumerable: true },
    theme: { value: 'dark', enumerable: true }
}));

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Logik Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Kemaskini aria-expanded untuk Lighthouse Accessibility
            const isExpanded = navLinks.classList.contains('active');
            menuBtn.setAttribute('aria-expanded', isExpanded);
        });
    }

    // 2. Dinamik Tahun untuk Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});