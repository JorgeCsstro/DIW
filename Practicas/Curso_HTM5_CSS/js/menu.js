var enlaceMenu;

function iniciarMenu() {
	enlaceMenu = document.querySelector("main>nav>.menu");
	enlaceMenu.addEventListener("click", despliegaMenu, false);
}

function despliegaMenu(){
	let menuItems = document.querySelectorAll("main>nav>ul");
    menuItems.forEach((menu) => {
        menu.classList.toggle('desplegado');
    });
}

window.addEventListener("load", iniciarMenu, false);
