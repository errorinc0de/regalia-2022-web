import './tailwind.css'

import 'flowbite'

import Splide from '@splidejs/splide'

import '@splidejs/splide/css'

import { render } from 'https://unpkg.com/lit-html?module'

import { navbar } from './lib/navbar.js'

import { el, elall, log } from './util.js'

import logo from './images/logo_rcciit.png'

const modules = import.meta.glob('./images/carousel/*.jpg')
const gallery = []

// swarasati PNB

let bg = 'bg-transparent'

onscroll = () => {
  scrollY > 10 ? (bg = 'bg-background') : (bg = 'bg-transparent')

  render(navbar(logo, bg), document.body)
}

render(navbar(logo), document.body)

for (const path in modules) {
  modules[path]().then(() => {
    const p = new URL(path, import.meta.url)
    gallery.push(p)
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
LANDING.intro = document.querySelector('.preloader-page')
// LANDING.path = LANDING.intro.querySelector('path')

jQuery(window).load(function () {
  if (sessionStorage.getItem('dontLoad') == null) {
    // sessionStorage.setItem('dontLoad', true)

    el('body').classList.add('overflow-hidden')
    $('.preloader-page').css('display', 'block')

    // setTimeout(() => {
    //   svgAnimation()
    // }, 3000)
  } else {
    el('body').classList.remove('overflow-hidden')
    $('.preloader-page').css('display', 'none')
    $('.main-body').css('display', 'block')
  }
})

const svgAnimation = () => {
  $('.main-body').css('display', 'block')
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
