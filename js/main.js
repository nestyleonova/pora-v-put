const header = document.querySelector('.site-header');
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .route-card, .step, .review').forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
});

const form = document.getElementById('subscribeForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    note.textContent = 'Спасибо! Подборка придёт на указанную почту.';
    form.reset();
});
