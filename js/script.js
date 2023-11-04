// toggle hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const menu = document.querySelector('#hamburger-menu') ;
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');

menu.onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik outer to close
document.addEventListener('click', function (e) {
    if (!navbarNav.contains(e.target) && !menu.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
}

