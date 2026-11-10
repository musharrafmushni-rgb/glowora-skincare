document.addEventListener("DOMContentLoaded", () => {
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Add fade-in animation to hero section on load
    const heroSection = document.querySelector("section");
    if (heroSection) {
        heroSection.classList.add("animate-fade-in");
    }

    // Simple Cart Counter Logic (Demo)
    let cartCount = 2;
    const cartBadge = document.querySelector("nav .bg-brand-pink");
    if (cartBadge) {
        // Example: Click panna increment aagum
        cartBadge.parentElement.addEventListener("click", () => {
            cartCount++;
            cartBadge.innerText = cartCount;
        });
    }
});