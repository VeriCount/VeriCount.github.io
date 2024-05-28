document.addEventListener('DOMContentLoaded', () => {
    // Add interactive features here

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dropdown menu
    const dropdowns = document.querySelectorAll('nav ul li ul.dropdown');
    dropdowns.forEach(dropdown => {
        const parent = dropdown.parentElement;
        parent.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });
        parent.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
        });
    });
});
