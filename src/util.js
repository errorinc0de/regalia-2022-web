// console log
export const log = console.log
// query selector
export const el = (selector, type = document) => type.querySelector(selector)
// query selector all
export const elall = (selector, type = document) => [
  ...type.querySelectorAll(selector),
]
