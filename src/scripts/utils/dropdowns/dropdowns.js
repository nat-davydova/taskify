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

  toggleDropdownBtn(dropdownBtn)
  toggleDropdownOptions(dropdownOptions)
}
