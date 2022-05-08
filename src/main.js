import './tailwind.css'

import { el, elall, log } from './util.js'

const nav = el('nav[data-navbar]')
const navlinks = elall('a[data-navlink]')

const sections = elall('section')
const section_home = el('section[data-home]')
const section_event = el('section[data-event]')
const section_artist = el('section[data-artist]')
const section_about = el('section[data-about]')
const section_contact = el('section[data-contact]')

const slider = el('div[data-carousel]')

onscroll = () => {
// add background on scroll
  pageYOffset > 10
    ? nav.classList.add('bg-debug')
    : nav.classList.remove('bg-debug')

  //TODO add active to current link

}

// TODO add carousels
let images = []

for (let i=1; i<=74; i++) {
  const path = './images/carousel/'
  const imgSrc = `${path}${i}.jpg`
  images.push(imgSrc)
}

images.forEach(image => {
  slider.innerHTML += `
    <div class="snap-center w-4/5 sm:w-3/5 min-h-full shrink-0 rounded-xl overflow-hidden shadow-lg shadow-[#0a0a0a]">
      <img src="${image}" class="block w-full h-full object-cover object-center" />
    </div>
  `
})

// Hide "artist" section and link
// remove the line when completed
elall('[data-wip]').forEach(el => el.classList.add('hidden'))
