import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


// this is the burger menu
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  nav.classList.toggle('show');
});
