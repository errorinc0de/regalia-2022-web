import './tailwind.css'

import 'flowbite'

import Splide from '@splidejs/splide'

import '@splidejs/splide/css'

import { el, elall, log } from './util.js'

const modules = import.meta.glob('./images/carousel/*.jpg')
const gallery = []

// swarasati PNB

onscroll = () =>
  scrollY > 10 ? el('nav').classList.add('bg-background') : el('nav').classList.remove('bg-background') 

for (const path in modules) {
  modules[path]().then(() => {
    const p = new URL(path, import.meta.url)
    gallery.push(p.href)
  })
}

document.addEventListener('DOMContentLoaded', function () {
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
})

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

el('.preloader-page').addEventListener('click', svgAnimation)

// Hide "artist" section and link
// remove the line when completed
elall('[data-wip]').forEach(el => el.classList.add('hidden'))
