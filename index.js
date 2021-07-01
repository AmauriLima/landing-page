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

const pointers = document.querySelectorAll('#banner .pointer');

pointers.forEach(pointer => {
  pointer.addEventListener('click', () => {
    console.log(pointer.getAttribute('data-key'))
    changeSlide(pointer.getAttribute('data-key'), pointers, pointer);
  });
});

const slider = document.querySelector('#sliders');
function changeSlide(slide, pointers, pointer) {  

  pointers.forEach(pointer => {
    pointer.classList.remove('active')
  })
  pointer.classList.add('active');

  if (slide == 0) {
    slider.style.marginLeft = 0;
  }
  else if (slide == 1) {
    slider.style.marginLeft = "-100vw";
  }
  else if (slide == 2) {
    slider.style.marginLeft = "-200vw";
  }
}

window.addEventListener('load', () => {
  let slide = 0
  let pointer;
  let timer = 10000;
  setInterval(() => {
    pointer = pointers[slide];
    
    changeSlide(slide, pointers, pointer)
    slide++;
    if (slide == 3) {
      slide = 0;
    }
  }, timer);
})