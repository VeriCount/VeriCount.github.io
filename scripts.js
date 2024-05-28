// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Add interactive features here

    // Dropdown functionality for "About Us" section
    const aboutUsLink = document.querySelector("nav ul li a[href='#about']");
    const dropdownContent = document.querySelector("nav ul li .dropdown-content");

    aboutUsLink.addEventListener("mouseover", function () {
        dropdownContent.style.display = "block";
    });

    aboutUsLink.addEventListener("mouseout", function () {
        dropdownContent.style.display = "none";
    });

    dropdownContent.addEventListener("mouseover", function () {
        dropdownContent.style.display = "block";
    });

    dropdownContent.addEventListener("mouseout", function () {
        dropdownContent.style.display = "none";
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
