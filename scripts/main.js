document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var button = document.querySelector('.button button');

    var DarkMode = localStorage.getItem('darkMode') === 'true';
    if (DarkMode) {
        body.classList.add('dark-theme');
        button.classList.add('dark-button');
    }

    button.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        button.classList.toggle('dark-theme');

        localStorage.setItem('darkMode', body.classList.contains('dark-theme'));
    });
});