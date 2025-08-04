
// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Form handling
const volunteerForm = document.querySelector('#volunteer form');
const contactForm = document.querySelector('#contact form');

if(volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your volunteer application! We will contact you soon.');
        volunteerForm.reset();
    });
}

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        contactForm.reset();
    });
}


