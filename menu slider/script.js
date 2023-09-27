const menuBtn = document.getElementById('menu-btn');
const menuIcon = menuBtn.firstElementChild;

showNav = () => {
    document.body.classList.toggle('show-nav');
    menuIcon.className === 'ri-menu-fill'
        ? (menuIcon.className = 'ri-close-fill')
        : (menuIcon.className = 'ri-menu-fill');
};

menuBtn.addEventListener('click', showNav);
