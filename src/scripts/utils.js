import PerfectScrollbar from 'perfect-scrollbar'

import { PATH } from './configs/path'

// COLLECTION OF HELPERS FUNCTIONS

// - common
// - forms related
// - templates related
// - modals related
// - scrollbar related

// *** HELPERS FOR LOCAL USAGE

// funcName() is used for error message customization
const checkIfElemArgValid = (elem, funcName, parentElem = null) => {
  if (
    !elem ||
    typeof elem !== 'string' ||
    elem.trim() === '' ||
    (parentElem && typeof parentElem !== 'string') ||
    (parentElem && parentElem.trim() === '')
  ) {
    throw new Error(`Provide a DOM element to ${funcName} function`)
  }

  return true
}

// *** COMMON

export const hideElem = elem => {
  checkIfElemArgValid(elem, 'hideElem')

  elem.classList.add('js-hidden')
}

export const showElem = elem => {
  checkIfElemArgValid(elem, 'showElem')

  elem.classList.remove('js-hidden')
}

export const markAsError = elem => {
  checkIfElemArgValid(elem, 'markAsError')

  const errorElem = document.querySelector(elem)
  errorElem.classList.add('border-danger')
}

// use if you need to remove error markers from element (check previous function)
export const unmarkErrored = elem => {
  checkIfElemArgValid(elem, 'unmarkErrored')

  const errorElem = document.querySelector(elem)
  errorElem.classList.remove('border-danger')
}

export const triggerClick = (elem, parentElem, needToSearchParent = true) => {
  checkIfElemArgValid(elem, 'triggerClick', parentElem)

  let elemEl

  if (parentElem && needToSearchParent) {
    const parentEl = document.querySelector(parentElem)
    elemEl = parentEl.querySelector(elem)
  } else if (parentElem) {
    elemEl = parentElem.querySelector(elem)
  } else {
    elemEl = document.querySelector(elem)
  }

  elemEl.click()
}

// *** FORMS RELATED

export const getInputValue = (inputElem, parentElem) => {
  checkIfElemArgValid(inputElem, 'getInputValue', parentElem)

  let inputEl

  if (parentElem) {
    inputEl = parentElem.querySelector(inputElem)
  } else {
    inputEl = document.querySelector(inputElem)
  }

  return inputEl.value
}

export const cleanInput = inputElem => {
  checkIfElemArgValid(inputElem, 'cleanInput')

  const inputEl = document.querySelector(inputElem)
  inputEl.value = ''
}

export const checkTextEmpty = stringArg => {
  if (
    !stringArg ||
    typeof stringArg !== 'string'
  ) {
    throw new Error('Provide a string argument to checkTextEmpty function')
  }

  return stringArg.length === 0 || stringArg.trim() === ''
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
