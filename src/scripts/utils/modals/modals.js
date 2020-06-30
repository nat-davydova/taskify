import { PATH } from '../../configs/path'
import { triggerClick } from '../utils'

export const closeModal = modal => {
  modal.classList.remove('show')
}

export const openModal = modal => {
  const modalEl = document.querySelector(modal)

  modalEl.classList.add('show')
}

export const dismissModal = modalEl => {
  if (!modalEl) {
    throw new Error('Provide a DOM element in to dismissModal function')
  }

  triggerClick(PATH.misc.modalClose, modalEl)
}
