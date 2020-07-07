import { PATH } from '../../configs/path'
import { checkElemArgValid, unmarkErrored } from '../utils'

export const closeModal = modal => {
  if (!modal) {
    throw new Error('Provide a DOM element in to closeModal function')
  }

  const modalInputs = modal.querySelectorAll('input')
  modalInputs.forEach(elem => {
    unmarkErrored(elem)
    elem.value = ''
  })

  const modalBackdrop = document.querySelector(PATH.modals.modalBackdrop)
  const appFrame = document.querySelector(PATH.layout.frame)

  setTimeout(() => {
    appFrame.removeChild(modalBackdrop)
  }, 250)

  modal.classList.remove('show')
}

export const openModal = (modal, inputToAutofocus) => {
  if (!modal) {
    throw new Error('Provide a DOM element in to openModal function')
  }

  const modalEl = document.querySelector(modal)

  const modalBackdrop = document.createElement('div')
  modalBackdrop.classList.add('modal-backdrop', 'fade', 'show')
  const appFrame = document.querySelector(PATH.layout.frame)
  appFrame.appendChild(modalBackdrop)

  modalEl.classList.add('show')

  if (inputToAutofocus) {
    setTimeout(() => {
      const inputToAutofocusElem = modalEl.querySelector(inputToAutofocus)
      checkElemArgValid(inputToAutofocusElem, 'openModal')
      inputToAutofocusElem.focus()
    }, 250)
  }
}
