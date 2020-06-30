import PerfectScrollbar from 'perfect-scrollbar'

import { PATH } from '../configs/path'

// COLLECTION OF HELPERS FUNCTIONS

// - common
// - forms related
// - templates related
// - modals related
// - scrollbar related

// *** HELPERS FOR LOCAL USAGE

// funcName() is used for error message customization
export const checkIfElemArgValid = (elem, funcName) => {
  if (
    !elem ||
    typeof elem !== 'string' ||
    elem.trim() === ''
  ) {
    throw new Error(`Provide a DOM element to ${funcName} function`)
  }

  return true
}

// *** COMMON

export const hideElem = elem => {
  if (!elem) {
    throw new Error('Provide a DOM element to hideElem function')
  }

  elem.classList.add('js-hidden')
}

export const showElem = elem => {
  if (!elem) {
    throw new Error('Provide a DOM element to showElem function')
  }

  elem.classList.remove('js-hidden')
}

export const markAsError = elem => {
  checkIfElemArgValid(elem, 'markAsError')

  const errorElem = document.querySelector(elem)
  errorElem.classList.add('is-invalid')
}

// use if you need to remove error markers from element (check previous function)
export const unmarkErrored = elem => {
  checkIfElemArgValid(elem, 'unmarkErrored')

  const errorElem = document.querySelector(elem)
  errorElem.classList.remove('is-invalid')
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

export const getInputValue = (inputElem, parentElem = null) => {
  checkIfElemArgValid(inputElem, 'getInputValue', parentElem)

  let inputEl

  if (parentElem) {
    inputEl = parentElem.querySelector(inputElem)
  } else {
    inputEl = document.querySelector(inputElem)
  }

  return inputEl.value
}

export const cleanInput = (inputElem, needToFind = false) => {
  let inputEl

  if (needToFind) {
    checkIfElemArgValid(inputElem, 'cleanInput')

    inputEl = document.querySelector(inputElem)
  }

  if (!inputElem) {
    throw new Error('Provide a DOM element to cleanInput function')
  }

  inputEl = inputElem

  inputEl.value = ''
}

export const checkTextEmpty = stringArg => {
  if (typeof stringArg !== 'string') {
    throw new Error('Provide a string argument to checkTextEmpty function')
  }

  return stringArg.length === 0 || stringArg.trim() === ''
}

// *** TEMPLATES RELATED

export const grabTemplate = templateElem => {
  checkIfElemArgValid(templateElem, 'grabTemplate')

  const template = document.querySelector(templateElem)

  return document.importNode(template.content, true)
}

export const appendTemplate = (templateElem, appendDestinationElem) => {
  if (!templateElem) {
    throw new Error('Add a template element in appendTemplate function')
  }

  if (!appendDestinationElem) {
    throw new Error('Add an append destination in appendTemplate function')
  }

  appendDestinationElem.append(templateElem)
}

// *** SCROLLBAR RELATED
export const scrollbarIniting = elemWithScrollbar => {
  if (!elemWithScrollbar) {
    throw new Error('Provide a DOM element in to scrollbarIniting function')
  }

  const ps = new PerfectScrollbar(elemWithScrollbar)
}
