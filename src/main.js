import './tailwind.css'

import 'flowbite'

import '@splidejs/splide/css'

import Splide from '@splidejs/splide'

import { el, elall, log } from './util.js'

import humans from '../humans.txt'
import webManifest from './site.webmanifest'

// TODO: add text animations
// Splitting()

onscroll = () =>
  scrollY > 10
    ? el('nav').classList.add('bg-background')
    : el('nav').classList.remove('bg-background')

if (!('dontLoad' in sessionStorage)) {
  el('.preloader-page').style.display = 'block'
  el('body').style.overflow = 'hidden'

  sessionStorage.setItem('dontLoad', true)
}

onload = () => {
  el('.preloader-page').style.cursor = 'pointer'
  el('.preloader-page').addEventListener('click', svgAnimation)
  el('.loader__text > p').textContent = 'Click to begin'

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
  el('body').style.removeProperty('overflow')

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
// Hide "artist" section and link
// remove the line when completed
elall('[data-wip]').forEach(el => el.classList.add('hidden'))
