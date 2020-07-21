import PerfectScrollbar from 'perfect-scrollbar'

// COLLECTION OF HELPERS FUNCTIONS

// - common
// - strings related
// - ui-related
// - templates related
// - modals related
// - scrollbar related

// *** COMMON

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

// *** STRINGS RELATED
export const checkTextEmpty = stringArg => {
  if (typeof stringArg !== 'string') {
    throw new Error('Provide a string argument to checkTextEmpty function')
  }

  return stringArg.length === 0 || stringArg.trim() === ''
}

export const stringToCamelCase = (string, separator) => {
  checkStringArgValid(string, 'stringToCamelCase')
  checkStringArgValid(separator, 'stringToCamelCase')

  const strArr = string.split(separator)

  const newStrArr = strArr.map((elem, index) => {
    if (index === 0) {
      return elem
    }

    const newElem = elem.slice(0, 1).toUpperCase() + elem.slice(1, elem.length)
    return newElem
  })

  return newStrArr.join('')
}

// *** UI-RELATED

export const hideElem = elem => {
  checkElemArgValid(elem, 'hideElem')

  elem.classList.add('js-hidden')
}

export const showElem = elem => {
  checkElemArgValid(elem, 'showElem')

  elem.classList.remove('js-hidden')
}

export const markAsError = elem => {
  checkElemArgValid(elem, 'markAsError')

  elem.classList.add('is-invalid')
}

// Bootstrap related function for visual button state toggling
export const toggleBootstrapBtn = btn => {
  checkElemArgValid(btn, 'toggleBootstrapBtn')
  btn.classList.toggle('active')
}

// use if you need to remove error markers from element (check previous function)
export const unmarkErrored = elem => {
  checkElemArgValid(elem, 'unmarkErrored')

  elem.classList.remove('is-invalid')
}

// *** TEMPLATES RELATED

export const grabTemplate = templateElem => {
  checkElemArgValid(templateElem, 'grabTemplate')

  return document.importNode(templateElem.content, true)
}

export const appendTemplate = (templateElem, appendDestinationElem) => {
  if (
    !templateElem ||
    !(templateElem instanceof window.DocumentFragment)
  ) {
    throw new Error('Add a valid template element to appendTemplate function')
  }

  checkElemArgValid(appendDestinationElem, 'appendTemplate')

  appendDestinationElem.append(templateElem)
}

// *** SCROLLBAR RELATED
export const scrollbarIniting = elemWithScrollbar => {
  checkStringArgValid(elemWithScrollbar, 'scrollbarIniting')

  const ps = new PerfectScrollbar(elemWithScrollbar)
}
