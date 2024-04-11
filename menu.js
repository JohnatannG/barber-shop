const abrirmenu = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

function ToggleMenu() {
    nav.classList.toggle('active');
}

abrirmenu.addEventListener('click', ToggleMenu);