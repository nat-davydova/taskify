import PerfectScrollbar from 'perfect-scrollbar'

import { PATH } from './configs/path'

// COLLECTION OF HELPERS FUNCTIONS

// - common
// - forms related
// - templates related
// - modals related
// - scrollbar related

// *** COMMON

export const hideElem = elem => {
  if (elem) {
    elem.classList.add('js-hidden')
  } else {
    throw new Error('Provide a DOM element to hideElem() function')
  }
}

export const showElem = elem => {
  if (elem) {
    elem.classList.remove('js-hidden')
  } else {
    throw new Error('Provide a DOM element to hideElem() function')
  }
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

export const triggerClick = (elem, parent, needToSearchParent = true) => {
  let elemEl

  if (parent && needToSearchParent) {
    const parentEl = document.querySelector(parent)
    elemEl = parentEl.querySelector(elem)
  } else if (parent) {
    elemEl = parent.querySelector(elem)
  } else {
    elemEl = document.querySelector(elem)
  }

  elemEl.click()
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
  triggerClick(PATH.misc.modalClose, modal)
}

// *** SCROLLBAR RELATED
export const scrollbarIniting = elemWithScrollbar => {
  const ps = new PerfectScrollbar(elemWithScrollbar)
}
