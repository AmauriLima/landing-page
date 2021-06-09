const menu = document.querySelector('#menu .menu-opener')
const navMenu = document.querySelector('#menu nav')
function toggleMenu() {
  if (navMenu.style.display == 'none') {
    navMenu.style.display = 'block';
  } else {
    navMenu.style.display = 'none';
  }
}

function showMenu() {
  if (window.innerWidth <= 1000) {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'block';
  }
}