// console log
const log = console.debug
// query selector
const el = (selector, type = document) => type.querySelector(selector)
// query selector all
const elall = (selector, type = document) => [
  ...type.querySelectorAll(selector),
]
