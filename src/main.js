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

onscroll = () => {
// add background on scroll
  pageYOffset > 10
    ? nav.classList.add('bg-background')
    : nav.classList.remove('bg-background')

  //TODO add active to current link

}

