export const getInputValue = inputElem => {
  const inputEl = document.querySelector(inputElem)

  return inputEl.value
}

export const grabTemplate = templateElem => {
  const template = document.querySelector(templateElem)

  return document.importNode(template.content, true)
}
