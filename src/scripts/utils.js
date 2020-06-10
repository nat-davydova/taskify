// COLLECTION OF HELPERS FUNCTIONS

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
  errorElem.classList.add('with-error')
}
