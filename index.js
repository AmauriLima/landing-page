const menu = document.querySelector('#menu .menu-opener')
const navMenu = document.querySelector('#menu nav')
function toggleMenu() {
  if (navMenu.style.display == 'none') {
    navMenu.style.display = 'block';
  } else {
    navMenu.style.display = 'none';
  }
}