/* =========================================
   MOBILE MENU
========================================= */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});
/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});
/* =========================================
   CONTACT FORM
========================================= */
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (!name || !email || !message) {
        alert("Mohon isi semua data terlebih dahulu.");
        return;
    }
    /*
       Untuk sementara form hanya menampilkan notifikasi.
       Jika ingin benar-benar mengirim email,
       form dapat dihubungkan ke Formspree,
       EmailJS, atau backend PHP.
    */
    alert(
        "Terima kasih, " +
        name +
        "! Pesan kamu berhasil disiapkan."
    );
    contactForm.reset();
});
/* =========================================
   SCROLL ANIMATION
========================================= */
const observerOptions = {
    threshold: 0.15
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);
const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .about-card, .art-card, .contact-info, .contact-form"
);
animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.7s ease";
    observer.observe(element);
});