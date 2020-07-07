import PerfectScrollbar from 'perfect-scrollbar'

// COLLECTION OF HELPERS FUNCTIONS

// - common
// - forms related
// - templates related
// - modals related
// - scrollbar related

// *** HELPERS FOR LOCAL USAGE

// funcName() is used for error message customization
export const checkStringArgValid = (elem, funcName) => {
  if (
    !elem ||
    typeof elem !== 'string' ||
    elem.trim() === ''
  ) {
    throw new Error(`Provide a valid non-empty string argument to ${funcName} function`)
  }

  return true
}

export const checkElemArgValid = (elem, funcName) => {
  if (
    !elem ||
    !(elem instanceof window.Element)
  ) {
    throw new Error(`Provide a valid DOM-element argument to ${funcName} function`)
  }

  return true
}

// *** COMMON

export const hideElem = elem => {
  checkElemArgValid(elem, 'hideElem')

  elem.classList.add('js-hidden')
}

export const showElem = elem => {
  if (!elem) {
    throw new Error('Provide a DOM element to showElem function')
  }

  elem.classList.remove('js-hidden')
}

export const markAsError = elem => {
  //checkIfElemArgValid(elem, 'markAsError')

  const errorElem = document.querySelector(elem)
  errorElem.classList.add('is-invalid')
}

// use if you need to remove error markers from element (check previous function)
export const unmarkErrored = (elem, needToSearch = false) => {
  if (needToSearch) {
    //checkIfElemArgValid(elem, 'unmarkErrored')

    elem = document.querySelector(elem)
  }

  if (!elem) {
    throw new Error('Provide a DOM element to cleanInput function')
  }

  elem.classList.remove('is-invalid')
}

export const triggerClick = (elem, parentElem, needToSearchParent = true) => {
  //checkIfElemArgValid(elem, 'triggerClick', parentElem)

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
  //checkIfElemArgValid(inputElem, 'getInputValue', parentElem)

  let inputEl

  if (parentElem) {
    inputEl = parentElem.querySelector(inputElem)
  } else {
    inputEl = document.querySelector(inputElem)
  }

  return inputEl.value
}

export const cleanInput = (inputElem, needToSearch = false) => {
  let inputEl = inputElem

  if (needToSearch) {
    //checkIfElemArgValid(inputElem, 'cleanInput')

    inputEl = document.querySelector(inputElem)
  }

  if (!inputElem) {
    throw new Error('Provide a DOM element to cleanInput function')
  }

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
  //checkIfElemArgValid(templateElem, 'grabTemplate')

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
  checkStringArgValid(elemWithScrollbar, 'scrollbarIniting')

  const ps = new PerfectScrollbar(elemWithScrollbar)
}
