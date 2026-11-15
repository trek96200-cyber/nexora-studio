
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Reveal sections when scrolling
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".section, .contact").forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("nexoraContactForm");

    if (!contactForm) {
        console.error("Contact form not found!");
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const status = document.getElementById("formStatus");

        status.textContent =
            "Thank you! Your demo message has been received.";

        contactForm.reset();
    });
});
