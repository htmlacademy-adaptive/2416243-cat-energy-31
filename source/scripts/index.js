const buttonMenu = document.querySelector('.menu-button');
const listMenu = document.querySelector('.navigation__list');
const slider = document.querySelector('.slider__wrapper');
const beforeImage = document.querySelector('.slider__item--before');
const afterImage = document.querySelector('.slider__item--after');
const sliderLine = document.querySelector('.slider__line');

buttonMenu.addEventListener('click', () => {
  listMenu.classList.toggle('navigation__list--opened');
  buttonMenu.classList.toggle('menu-button--opened');
});

function sliderMouseMove(event) {
  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if (mouseX < 0) {
    mouseX = 0;
  } else if (mouseX > sliderWidth) {
    mouseX = sliderWidth;
  }
  const size = `${((mouseX / sliderWidth) * 100).toFixed(2)}%`;
  beforeImage.style.width = size;
  afterImage.style.clipPath = `inset(0 0 0 ${size})`;
  sliderLine.style.left = size;
}

slider.addEventListener('mousemove', sliderMouseMove);
slider.addEventListener('touchmove', sliderMouseMove);
