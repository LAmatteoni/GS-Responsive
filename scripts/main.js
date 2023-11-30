document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var button = document.querySelector('.button button');
    var menu = document.querySelector('.menu-icon img');

    var DarkMode = localStorage.getItem('darkMode') === 'true';
    if (DarkMode) {
        body.classList.add('dark-theme');
        button.classList.add('dark-button');
        menu.src = './assets/menu-branco.png';
        button.innerHTML = 'Modo Claro';
    }

    button.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        button.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            menu.src = './assets/menu-branco.png';
            button.innerHTML = 'Modo Claro';
        } else {
            menu.src = './assets/menu-preto.png';
            button.innerHTML = 'Modo Escuro';
        }

        localStorage.setItem('darkMode', body.classList.contains('dark-theme'));
    });
});