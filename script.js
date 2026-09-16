const tabs = document.querySelectorAll('.hero-tab');
const slides = document.querySelectorAll('.hero-slide');

tabs.forEach((tab) => tab.addEventListener('click', () => {
  const index = Number(tab.dataset.slide);
  tabs.forEach((item) => {
    item.classList.toggle('active', item === tab);
    item.setAttribute('aria-selected', String(item === tab));
  });
  slides.forEach((slide, itemIndex) => slide.classList.toggle('active', itemIndex === index));
}));

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
