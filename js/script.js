// toggle hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const menu = document.querySelector('#hamburger-menu') ;
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');
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

    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
});

document.querySelector('#search-button').onclick = () => {

    searchForm.classList.toggle('active');
    searchBox.focus();
}


const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) =>{
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    }
})

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = () => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
    window.location.href = '#products';
}

window.onclick = (e) => {
    if (e.target === itemDetailModal){
        itemDetailModal.style.display = 'none';
    }
}
