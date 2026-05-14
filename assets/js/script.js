// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Add fade-in class to sections and observe all fade-in elements for scroll animations
const sections = document.querySelectorAll('section:not(#hero)');
sections.forEach(section => section.classList.add('fade-in'));

const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(element => {
    observer.observe(element);
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const phoneInput = contactForm.querySelector('#phone');
    const companyInput = contactForm.querySelector('#company');
    const serviceSelect = contactForm.querySelector('#service');
    const budgetSelect = contactForm.querySelector('#budget');
    const messageInput = contactForm.querySelector('#message');

    const feedback = document.createElement('div');
    feedback.className = 'form-message';
    const heading = contactForm.querySelector('h2');
    if (heading) {
        heading.insertAdjacentElement('afterend', feedback);
    } else {
        contactForm.prepend(feedback);
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const company = companyInput.value.trim() || 'N/A';
        const service = serviceSelect.value;
        const budget = budgetSelect.value;
        const message = messageInput.value.trim();

        if (!email.includes('@')) {
            feedback.textContent = 'Please enter a valid email address that includes @.';
            feedback.classList.add('error-visible');
            emailInput.focus();
            return;
        }

        if (!name || !email || !service || !budget || !message) {
            feedback.textContent = 'Please fill in all required fields before sending.';
            feedback.classList.add('error-visible');
            return;
        }

        feedback.textContent = '';
        feedback.classList.remove('error-visible');
        feedback.classList.remove('success-visible');

        const subject = `New inquiry from ${name} - ${service}`;
        const bodyLines = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Company: ${company}`,
            `Service: ${service}`,
            `Budget: ${budget}`,
            '',
            'Message:',
            `${message}`
        ];

        const mailtoLink = `mailto:nooa.perttula@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\r\n'))}`;
        feedback.textContent = 'Opening your email client now. If it does not launch, please send your message to nooa.perttula@gmail.com.';
        feedback.classList.add('success-visible');
        setTimeout(() => {
            window.location.href = mailtoLink;
        }, 250);
    });
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('primary-navigation');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        const isOpen = navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        navLinks.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.setAttribute('aria-hidden', 'true');
        });
    });
}