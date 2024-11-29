function mueveChincheta1() {
    // Selecciona la 1a chincheta
    const chincheta1 = document.querySelector('article:nth-of-type(1) > img:nth-child(1)');
    
    // Añade la clase para hacer la animación
    chincheta1.classList.add('chincheta1');
    
    setTimeout(() => {
        // Mueve a la izquierda 250px
        chincheta1.style.left = '250px';
    }, 0);

    
}

function animArticle1() {
    // Cuando acabe la animación de la chincheta moverá el movil
    setTimeout(() => {
        const article1 = document.querySelector('article:nth-of-type(1)');
        article1.classList.add('article1'); 
    }, 1000);
}