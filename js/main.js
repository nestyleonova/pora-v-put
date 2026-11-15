const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

navToggle.onclick = function () {
    nav.classList.toggle('is-open');
};

nav.onclick = function (event) {
    if (event.target.tagName === 'A') {
        nav.classList.remove('is-open');
    }
};

const form = document.getElementById('subscribeForm');
const note = document.getElementById('formNote');

form.onsubmit = function (event) {
    event.preventDefault();
    note.textContent = 'Спасибо! Подборка придёт на указанную почту.';
    form.reset();
};
