// COLLECTION OF HELPERS FUNCTIONS

import { PATH } from './configs/path'

export const getInputValue = inputElem => {
  const inputEl = document.querySelector(inputElem)

  return inputEl.value
}

export const grabTemplate = templateElem => {
  const template = document.querySelector(templateElem)

  return document.importNode(template.content, true)
}

export const appendTemplate = (template, appendDestination) => appendDestination.append(template)

export const cleanInput = input => {
  const inputEl = document.querySelector(input)
  inputEl.value = ''
}

export const checkTextEmpty = string => {
  return !string || string.trim() === ''
}

export const markAsError = elem => {
  const errorElem = document.querySelector(elem)
  errorElem.classList.add('border-danger')
}

// use if you need to remove error markers from element (check previous function)
export const unmarkErrored = elem => {
  const errorElem = document.querySelector(elem)
  errorElem.classList.remove('border-danger')
}

export const dismissModal = modal => {
  const modalElem = document.querySelector(modal)
  const modalBackdrop = document.querySelector(PATH.misc.modalBackdrop)

  modalElem.classList.remove('show')
  modalElem.setAttribute('aria-hidden', 'true')
  modalElem.setAttribute('style', 'display: none')

  document.body.removeChild(modalBackdrop)
}
