import './events.css'
// import '../tailwind.css'
//
// import {render} from 'https://unpkg.com/lit-html?module';
// import {navbar} from '../lib/navbar.js'
//
// import logo from '../images/logo_rcciit.png'
//
// let bg = 'bg-transparent'
//
// onscroll = () => {
//   scrollY > 10 ? (bg = 'bg-background') : (bg = 'bg-transparent')
//
//   render(navbar(logo, bg), document.body)
// }
//
// render(navbar(logo), document.body)
//

import bg from './images/bg.webp'

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelector('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
