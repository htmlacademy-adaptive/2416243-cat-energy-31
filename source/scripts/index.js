import './../vendor/leaflet/leaflet.js';

const buttonMenu = document.querySelector('.main-header__toggle');
const navMenu = document.querySelector('.navigation');
const slider = document.querySelector('.slider__wrapper');
const beforeImage = document.querySelector('.slider__item--before');
const afterImage = document.querySelector('.slider__item--after');
const sliderLine = document.querySelector('.slider__line');
/* eslint-disable */
const mapLocation = L.map('site-map').setView([59.9383496968133, 30.322116673359545], 18);
const myIcon = L.icon({className: 'footer__map-icon', iconUrl: 'images/map-pin@1x.png'});
const locationMarker = L.marker([59.93878233419091, 30.32281404770163], {icon: myIcon}).addTo(mapLocation);
const mapLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapLocation);
/* eslint-enable */

navMenu.classList.remove('navigation--nojs');

buttonMenu.addEventListener('click', () => {
  if (navMenu.classList.contains('navigation--closed')) {
    navMenu.classList.remove('navigation--closed');
    navMenu.classList.add('navigation--opened');
  } else {
    navMenu.classList.remove('navigation--opened');
    navMenu.classList.add('navigation--closed');
  }
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
