import './tailwind.css'

import 'flowbite'

import Splide from '@splidejs/splide'

import '@splidejs/splide/css'

import { el, elall, log } from './util.js'

const nav = el('nav[data-navbar]')

onscroll = () => {
  // add background on scroll
  scrollY > 10
    ? nav.classList.add('bg-background')
    : nav.classList.remove('bg-background')
}

document.addEventListener("DOMContentLoaded", function() {
  new Splide('.splide', {
    perPage: 2,
    type: 'loop',
    autoplay: true,
    focus: 'center',
    lazyLoad: 'nearby',
    height: '30rem',
    gap: '3rem',
    breakpoints: {
      1180: {
        perPage: 1,
      },
      640: {
        perPage: 1,
        gap: '2rem',
        height: '16rem',
      },
    },
  }).mount()
});

// preloader animation
const LANDING = {};
LANDING.intro = document.querySelector(".preloader-page");
LANDING.path = LANDING.intro.querySelector("path");

const svgAnimation = () => {
  el('body').classList.remove('overflow-hidden')

  anime({
    targets: LANDING.intro,
    duration: 2000,
    easing: "easeInOutSine",
    translateY: "-200vh"
  });

  anime({
    targets: LANDING.path,
    duration: 1500,
    easing: "easeInOutSine",
    d: LANDING.path.getAttribute("pathdata:id")
  });
};

el(".preloader-page").addEventListener("click", svgAnimation);

// Hide "artist" section and link
// remove the line when completed
elall('[data-wip]').forEach(el => el.classList.add('hidden'))
