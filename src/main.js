import './tailwind.css'

import 'flowbite'

// import '../node_modules/flowbite/dist/flowbite.js'

const jpges = import.meta.glob('./images/carousel/*.jpg')
const images = []

import { el, elall, log } from './util.js'

const nav = el('nav[data-navbar]')

const slider = el('div[data-carousel]')

onscroll = () => {
// add background on scroll
  pageYOffset > 10
    ? nav.classList.add('bg-background')
    : nav.classList.remove('bg-background')

}


  for (const path in jpges) {
    jpges[path]().then(() => {
      const p = new URL(path, import.meta.url)
      images.push(p.href)
    })
  }
onload = () => {
  images.forEach(image => {
    slider.innerHTML += `
      <div class="snap-center w-4/5 sm:w-3/5 min-h-full shrink-0 rounded-xl overflow-hidden shadow-lg shadow-[#0a0a0a]">
        <img src="${image}" class="block w-full h-full object-cover object-center" />
      </div>
    `
  })
}

// Hide "artist" section and link
// remove the line when completed
elall('[data-wip]').forEach(el => el.classList.add('hidden'))
