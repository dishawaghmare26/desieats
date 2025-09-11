// DOM Elements
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
const closeIcon = mobileMenuToggle.querySelector('.close-icon');
const newsletterForm = document.getElementById('newsletterForm');
const searchInput = document.getElementById('searchInput');

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', () => {
    const isOpen = !mobileNav.classList.contains('hidden');
    
    if (isOpen) {
        // Close menu
        mobileNav.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    } else {
        // Open menu
        mobileNav.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
});

// Close mobile menu when clicking on nav links
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Check Login Status on Page Load - THIS LOGIC IS NOW HANDLED IN auth.js
/*
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const guestActions = document.getElementById('guest-actions');
    const userActions = document.getElementById('user-actions');
    const mobileGuestActions = document.getElementById('mobile-guest-actions');
    const mobileUserActions = document.getElementById('mobile-user-actions');

    if (isLoggedIn) {
        guestActions.classList.add('hidden');
        userActions.classList.remove('hidden');
        mobileGuestActions.classList.add('hidden');
        mobileUserActions.classList.remove('hidden');
    } else {
        guestActions.classList.remove('hidden');
        userActions.classList.add('hidden');
        mobileGuestActions.classList.remove('hidden');
        mobileUserActions.classList.add('hidden');
    }

    // Handle mobile logout if on index.html
    const mobileLogoutButton = document.getElementById('mobileLogoutButton');
    if (mobileLogoutButton) {
        mobileLogoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });
    }
});
*/