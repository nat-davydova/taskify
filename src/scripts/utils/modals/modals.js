import { PATH } from '../../configs/path'
import { triggerClick } from '../utils'

export const closeModal = modal => {
  if (!modal) {
    throw new Error('Provide a DOM element in to closeModal function')
  }

  const modalBackdrop = document.querySelector(PATH.modals.modalBackdrop)
  const appFrame = document.querySelector(PATH.misc.frame)

  setTimeout(() => {
    appFrame.removeChild(modalBackdrop)
  }, 250)

  modal.classList.remove('show')
}

export const openModal = modal => {
  if (!modal) {
    throw new Error('Provide a DOM element in to openModal function')
  }

  const modalEl = document.querySelector(modal)

  const modalBackdrop = document.createElement('div')
  modalBackdrop.classList.add('modal-backdrop', 'fade', 'show')
  const appFrame = document.querySelector(PATH.misc.frame)
  appFrame.appendChild(modalBackdrop)

  modalEl.classList.add('show')
}

export const dismissModal = modalEl => {
  if (!modalEl) {
    throw new Error('Provide a DOM element in to dismissModal function')
  }

  triggerClick(PATH.misc.modalClose, modalEl)
}