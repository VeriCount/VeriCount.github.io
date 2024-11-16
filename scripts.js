document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Attach the search function to the search form
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            performSearch();
        });
    }
});

// Encapsulated search function
function performSearch() {
    const searchInput = document.querySelector('.search-form input[type="text"]').value.toLowerCase();
    const allText = document.body.innerText.toLowerCase();

    if (!searchInput) {
        alert('Please enter a search term.');
        return;
    }

    if (allText.includes(searchInput)) {
        alert(`The term "${searchInput}" was found.`);
    } else {
        alert(`The term "${searchInput}" was not found.`);
    }
}
