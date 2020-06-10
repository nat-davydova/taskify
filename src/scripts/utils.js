// COLLECTION OF HELPERS FUNCTIONS

import { PATH } from './configs/path'

export const getInputValue = (inputElem, form) => {
  let inputEl

  if (form) {
    inputEl = form.querySelector(inputElem)
  } else {
    inputEl = document.querySelector(inputElem)
  }

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
  const modalClose = modalElem.querySelector(PATH.misc.modalClose)

  modalClose.click()
}

export const hideElem = elem => {
  elem.classList.add('js-hidden')
}

export const showElem = elem => {
  elem.classList.remove('js-hidden')
}
