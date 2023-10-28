// toggle

const navbarNav = document.querySelector('.navbar-nav');

const menu = document.querySelector('#hamburger-menu') ;

menu.onclick = () => {
    navbarNav.classList.toggle('active');
}


// klik outer to close
document.addEventListener('click', function (e) {
    if (!navbarNav.contains(e.target) && !menu.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
