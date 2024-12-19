var enlaceMenu;

function iniciarMenu() {
    enlaceMenu = document.querySelector(".menu");
    enlaceMenu.addEventListener("click", despliegaMenu, false);
}

function despliegaMenu() {
    let menuItems = document.querySelectorAll("nav ul");
    menuItems.forEach((menu) => {
        menu.classList.toggle('desplegado');
    });
}

window.addEventListener("load", iniciarMenu, false);
