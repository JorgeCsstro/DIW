function mueveChincheta1() {
    // Selecciona la 1a chincheta
    const chincheta1 = document.querySelector('article:nth-of-type(1) > img:nth-child(1)');
    
    // Añade la clase para hacer la animación
    chincheta1.classList.add('chincheta1');
    
    setTimeout(() => {
        // Mueve a la izquierda 80%
        chincheta1.style.left = '80%';
    }, 0);
    // 0 milisegundos de retardo
}

function animArticle1() {
    // Cuando acabe la animación de la chincheta moverá el movil
    setTimeout(() => {
        const article1 = document.querySelector('article:nth-of-type(1)');
        article1.classList.add('article1'); 
    }, 1000);
    // 1000 milisegundos de retardo
}

function mueveChincheta2() {
    // Selecciona la 2a chincheta
    const chincheta2 = document.querySelector('article:nth-of-type(2) > img:nth-child(1)');
    
    // Añade la clase para hacer la animación
    chincheta2.classList.add('chincheta2');
    
    setTimeout(() => {
        // Mueve la chincheta a la posición 50%
        chincheta2.style.left = '50%';
    }, 1050);
    // 1050 milisegundos de retardo
}

function mueveChincheta3() {
    // Selecciona la 3a chincheta
    const chincheta3 = document.querySelector('article:nth-of-type(3) > img:nth-child(1)');
    
    // Añade la clase para hacer la animación
    chincheta3.classList.add('chincheta3');
    
    setTimeout(() => {
        // Mueve la chincheta a la izquierda 50px
        chincheta3.style.left = '20%';
    }, 2000);
    // 2000 milisegundos de retardo
}

function animArticle3() {
    // Cuando acabe la animación de la chincheta moverá el movil
    setTimeout(() => {
        const article3 = document.querySelector('article:nth-of-type(3)');
        article3.classList.add('article3'); 
    }, 3000);
    // 3000 milisegundos de retardo
}