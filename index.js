function toggleMenu() {
  const navMenu = document.querySelector('#menu nav')
  if (navMenu.style.display == 'none') {
    navMenu.style.display = 'block';
  } else {
    navMenu.style.display = 'none';
  }
}