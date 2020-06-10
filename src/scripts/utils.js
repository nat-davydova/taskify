import { PATH } from './configs/path'

// COLLECTION OF HELPERS FUNCTIONS

// - common
// - forms related
// - templates related
// - modals related

// *** COMMON

export const hideElem = elem => {
  elem.classList.add('js-hidden')
}

export const showElem = elem => {
  elem.classList.remove('js-hidden')
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

// *** FORMS RELATED

export const getInputValue = (inputElem, form) => {
  let inputEl

  if (form) {
    inputEl = form.querySelector(inputElem)
  } else {
    inputEl = document.querySelector(inputElem)
  }

  return inputEl.value
}

export const cleanInput = input => {
  const inputEl = document.querySelector(input)
  inputEl.value = ''
}

export const checkTextEmpty = string => {
  return !string || string.trim() === ''
}

// *** TEMPLATES RELATED

export const grabTemplate = templateElem => {
  const template = document.querySelector(templateElem)

  return document.importNode(template.content, true)
}

export const appendTemplate = (template, appendDestination) => appendDestination.append(template)

// *** MODALS RELATED

export const dismissModal = modal => {
  const modalElem = document.querySelector(modal)
  const modalClose = modalElem.querySelector(PATH.misc.modalClose)

  modalClose.click()
}
