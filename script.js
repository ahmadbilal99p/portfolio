const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});
const art = document.querySelector('.hero-art');

function clientVisit() {
  art.classList.remove('visit');
  void art.offsetWidth;
  art.classList.add('visit');
  setTimeout(() => art.classList.remove('visit'), 10500);
}

setTimeout(clientVisit, 4000);
setInterval(clientVisit, 60000);