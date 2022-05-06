import './tailwind.css'

import { el, elall, log } from './util.js'

const nav = el('nav[data-navbar]')

window.onscroll = e => {
  const scrollY = window.pageYOffset

  scrollY > 10
    ? nav.classList.add('bg-background')
    : nav.classList.remove('bg-background')
}
