function toggleMode() {
    const body = document.body;
    body.classList.toggle('light');
    
    const button = document.querySelector('#switch button img');
    if (body.classList.contains('light')) {
        button.src = './sun.svg'; // Altera para a imagem do sol
    } else {
        button.src = './moon-stars.svg'; // Altera para a imagem da lua
    }
}
