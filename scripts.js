document.addEventListener('DOMContentLoaded', () => {
    // Add interactive features here
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

function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const allText = document.body.innerText.toLowerCase();

    if (searchInput === '') {
        alert('Please enter a search term.');
        return;
    }

    if (allText.includes(searchInput)) {
        alert('The term "' + searchInput + '" was found.');
    } else {
        alert('The term "' + searchInput + '" was not found.');
    }
}
