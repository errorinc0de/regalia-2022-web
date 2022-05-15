// Hide "artist" section and link
// remove the line when completed
elall('[data-wip]').forEach(el => el.classList.add('hidden'))

import './tailwind.css'

import '@splidejs/splide/css'

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

import 'flowbite'

import Splide from '@splidejs/splide'

import Splitting from 'splitting'

import { el, elall, log } from './util.js'

// TODO: add text animations
// Splitting()

onscroll = () =>
  scrollY > 10
    ? el('nav').classList.add('bg-background')
    : el('nav').classList.remove('bg-background')

onload = () => {
  el('.preloader-page').classList.remove('cursor-default')
  el('.loader__text > p').textContent = 'Click to begin'
  el('.preloader-page').addEventListener('click', svgAnimation)

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
}

// preloader animation
const LANDING = {}
LANDING.intro = el('.preloader-page')
LANDING.path = el('path', LANDING.intro)

const svgAnimation = () => {
  el('body').classList.remove('overflow-hidden')

  anime({
    targets: LANDING.intro,
    duration: 2000,
    easing: 'easeInOutSine',
    translateY: '-200vh',
  })

  anime({
    targets: LANDING.path,
    duration: 1500,
    easing: 'easeInOutSine',
    d: LANDING.path.getAttribute('pathdata:id'),
  })
}
