
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


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("nexoraContactForm");
    const status = document.getElementById("formStatus");

    if (!contactForm || !status) return;

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        status.textContent = "Надсилаємо повідомлення...";

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                status.textContent =
                    "Дякуємо! Повідомлення успішно надіслано.";

                contactForm.reset();
            } else {
                status.textContent =
                    "Не вдалося надіслати повідомлення. Спробуйте ще раз.";
            }
        } catch (error) {
            status.textContent =
                "Помилка з'єднання. Перевірте інтернет і спробуйте ще раз.";
        }
    });
});
