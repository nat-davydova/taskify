import { toggleBootstrapBtn, checkElemArgValid } from '../utils'

import { PATH } from '../../configs/path'

const toggleDropdownBtn = btn => {
  checkElemArgValid(btn, 'toggleDropdownBtn')
  toggleBootstrapBtn(btn)
}

const toggleDropdownOptions = options => {
  checkElemArgValid(options, 'toggleDropdownOptions')
  options.classList.toggle('js-visible')
}

export const dropdownToggle = dropdown => {
  checkElemArgValid(dropdown, 'dropdownToggle')

  const dropdownBtn = dropdown.querySelector(PATH.dropdown.toggleBtn)
  const dropdownOptions = dropdown.querySelector(PATH.dropdown.options)
  const currentToggleStatus = dropdown.dataset.toggled

  toggleDropdownBtn(dropdownBtn)
  toggleDropdownOptions(dropdownOptions)
  dropdown.dataset.toggled = currentToggleStatus === 'true' ? 'false' : 'true'
}

export const checkIfAnyDropdownOpened = () => {
  const dropdowns = document.querySelectorAll(PATH.dropdown.dropdownBlock)

  let toggled = false

  for (let i = 0; i < dropdowns.length; i++) {
    const currentEl = dropdowns[i]

    if (currentEl.dataset.toggled === 'true') {
      toggled = currentEl
      break
    }
  }

  return toggled
}
